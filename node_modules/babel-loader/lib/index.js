"use strict";

var assign = require("object-assign");
var babel = require("babel-core");
var loaderUtils = require("loader-utils");
var path = require("path");
var cache = require("./fs-cache.js");
var exists = require("./utils/exists")();
var relative = require("./utils/relative");
var read = require("./utils/read")();
var resolveRc = require("./resolve-rc.js");
var pkg = require("./../package.json");

function BabelLoaderError(name, message, codeFrame, hideStack, error) {
  Error.call(this);
  Error.captureStackTrace(this, BabelLoaderError);

  this.name = "BabelLoaderError";
  this.message = formatMessage(name, message, codeFrame);
  this.hideStack = hideStack;
  this.error = error;
}

BabelLoaderError.prototype = Object.create(Error.prototype);
BabelLoaderError.prototype.constructor = BabelLoaderError;

var STRIP_FILENAME_RE = /^[^:]+: /;

var formatMessage = function formatMessage(name, message, codeFrame) {
  return (name ? name + ": " : "") + message + "\n\n" + codeFrame + "\n";
};

var transpile = function transpile(source, options) {
  var forceEnv = options.forceEnv;
  var tmpEnv = void 0;

  delete options.forceEnv;

  if (forceEnv) {
    tmpEnv = process.env.BABEL_ENV;
    process.env.BABEL_ENV = forceEnv;
  }

  var result = void 0;
  try {
    result = babel.transform(source, options);
  } catch (error) {
    if (forceEnv) process.env.BABEL_ENV = tmpEnv;
    if (error.message && error.codeFrame) {
      var message = error.message;
      var name = void 0;
      var hideStack = void 0;
      if (error instanceof SyntaxError) {
        message = message.replace(STRIP_FILENAME_RE, "");
        name = "SyntaxError";
        hideStack = true;
      } else if (error instanceof TypeError) {
        message = message.replace(STRIP_FILENAME_RE, "");
        hideStack = true;
      }
      throw new BabelLoaderError(name, message, error.codeFrame, hideStack, error);
    } else {
      throw error;
    }
  }
  var code = result.code;
  var map = result.map;

  if (map && (!map.sourcesContent || !map.sourcesContent.length)) {
    map.sourcesContent = [source];
  }

  if (forceEnv) process.env.BABEL_ENV = tmpEnv;

  return {
    code: code,
    map: map
  };
};

module.exports = function (source, inputSourceMap) {
  var webpackRemainingChain = loaderUtils.getRemainingRequest(this).split("!");
  var filename = webpackRemainingChain[webpackRemainingChain.length - 1];

  var globalOptions = this.options.babel || {};
  var loaderOptions = loaderUtils.parseQuery(this.query);
  var userOptions = assign({}, globalOptions, loaderOptions);
  var defaultOptions = {
    inputSourceMap: inputSourceMap,
    sourceRoot: process.cwd(),
    filename: filename,
    cacheIdentifier: JSON.stringify({
      "babel-loader": pkg.version,
      "babel-core": babel.version,
      babelrc: exists(userOptions.babelrc) ? read(userOptions.babelrc) : resolveRc(path.dirname(filename)),
      env: userOptions.forceEnv || process.env.BABEL_ENV || process.env.NODE_ENV || "development"
    })
  };

  var options = assign({}, defaultOptions, userOptions);

  if (userOptions.sourceMap === undefined) {
    options.sourceMap = this.sourceMap;
  }

  if (options.sourceFileName === undefined) {
    options.sourceFileName = relative(options.sourceRoot, options.filename);
  }

  var cacheDirectory = options.cacheDirectory;
  var cacheIdentifier = options.cacheIdentifier;

  delete options.cacheDirectory;
  delete options.cacheIdentifier;

  this.cacheable();

  if (cacheDirectory) {
    var callback = this.async();
    return cache({
      directory: cacheDirectory,
      identifier: cacheIdentifier,
      source: source,
      options: options,
      transform: transpile
    }, function (err, result) {
      if (err) {
        return callback(err);
      }
      return callback(null, result.code, result.map);
    });
  }

  var result = transpile(source, options);
  this.callback(null, result.code, result.map);
};