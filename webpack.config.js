const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';

const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';

module.exports = () => {
    const config = {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
        },
        devServer: {
            open: true,
            host: 'localhost',
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'index.html',
            }),
            new NodePolyfillPlugin(),
        ],
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/i,
                    loader: 'babel-loader',
                },
                {
                    test: /\.css$/i,
                    use: [stylesHandler, 'css-loader', 'postcss-loader'],
                },
                {
                    test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                    type: 'asset',
                },
            ],
        },
    };

    if (isProduction) {
        config.mode = 'production';
        config.plugins.push(new MiniCssExtractPlugin());
    } else {
        config.mode = 'development';
    }

    config.resolve = {
        modules: [path.resolve(__dirname, 'node_modules')],
        fallback: {
            "fs": false,
            "tls": false,
            "net": false,
            "path": false,
            "zlib": false,
            "http": false,
            "https": false,
            "stream": false,
            "crypto": false,
            "crypto-browserify": require.resolve('crypto-browserify'),
            "path": require.resolve("path-browserify"),
            "stream": require.resolve("stream-browserify"),
            "crypto": require.resolve("crypto-browserify")
        }
    };

    // Provide the actual "nodeModules" array or remove the line.
    // config.module.externals = [nodeModules];

    return config;
};
