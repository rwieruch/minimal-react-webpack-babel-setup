const webpack = require('webpack');
const path = require('path');

const babelCconfig = {
    babelrc: false,
    "presets": [
        "react",
        [
            "env",
            {
                "modules": false,
                "useBuiltIns": true,
                "debug": true,
                "targets": {
                    "browsers": [
                        "Chrome >= 63",
                        "Firefox >= 58",
                        "Safari >= 11",
                        "iOS >= 10.3",
                        "Edge >= 41"
                    ]
                }
            }
        ]
    ],
    "plugins": [
        "external-helpers",
        "syntax-dynamic-import",
        "transform-class-properties",
        "syntax-trailing-function-commas",
        [
            "transform-object-rest-spread",
            {
                "useBuiltIns": true
            }
        ],
        [
            "lodash",
            {
                "id": [
                    "lodash",
                    "recompose"
                ]
            }
        ],
        "transform-react-jsx-self",
        "transform-react-jsx-source",
        [
            "runtyper",
            {
                "enabled": false
            }
        ]
    ],
    "env": {
        "production": {
            "plugins": [
                "jsx-remove-data-test-id"
            ]
        }
    }
};


/*
* You can remove env.production.plugins and uncomment these lines - there is no diff in code
*/
/*
if (process.env.NODE_ENV === 'production') {
    babelCconfig.plugins.push('jsx-remove-data-test-id');
}
*/

const config = {
    mode: 'production',
  entry: [
    'react-hot-loader/patch',
    './src/babelHelpers.js',
    './src/index.js'
  ],
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            use: {
                loader: 'babel-loader',
                options: babelCconfig
            },
            exclude: path.resolve('node_modules')
        },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};

module.exports = config;
