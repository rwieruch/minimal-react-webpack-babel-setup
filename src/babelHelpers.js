/* eslint-disable */
(function(global) {
    var babelHelpers = (global.babelHelpers = {});

    babelHelpers.jsx = (function() {
        var REACT_ELEMENT_TYPE =
            (typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element')) || 0xeac7;

        return function createRawReactElement(type, props, key, children) {
            var defaultProps = type && type.defaultProps;
            var childrenLength = arguments.length - 3;

            if (!props && childrenLength !== 0) {
                props = {};
            }

            if (props && defaultProps) {
                for (var propName in defaultProps) {
                    if (props[propName] === void 0) {
                        props[propName] = defaultProps[propName];
                    }
                }
            } else if (!props) {
                props = defaultProps || {};
            }

            if (childrenLength === 1) {
                props.children = children;
            } else if (childrenLength > 1) {
                var childArray = Array(childrenLength);

                for (var i = 0; i < childrenLength; i++) {
                    childArray[i] = arguments[i + 3];
                }

                props.children = childArray;
            }

            return {
                $$typeof: REACT_ELEMENT_TYPE,
                type: type,
                key: key === undefined ? null : '' + key,
                ref: null,
                props: props,
                _owner: null,
            };
        };
    })();

    babelHelpers.objectWithoutProperties = function(obj, keys) {
        var target = {};

        for (var i in obj) {
            if (keys.indexOf(i) >= 0) continue;
            if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
            target[i] = obj[i];
        }

        return target;
    };

    babelHelpers.interopRequireDefault = function(obj) {
        return obj && obj.__esModule
            ? obj
            : {
                  default: obj,
              };
    };

    babelHelpers.interopRequireWildcard = function(obj) {
        if (obj && obj.__esModule) {
            return obj;
        } else {
            var newObj = {};

            if (obj != null) {
                for (var key in obj) {
                    if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                }
            }

            newObj.default = obj;
            return newObj;
        }
    };

    babelHelpers.extends = Object.assign;
})(typeof global === 'undefined' ? self : global);
