// Webpack Desarrollo 202106021847

const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',

    output: {
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: false,
                            sources: false,
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtract.loader, 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html', //Respeta lo que haya en index.html
        }),

        new MiniCssExtract({
            // filename: '[name].[fullhash].css',
            filename: '[name].css',
            ignoreOrder: false,
        }),
        new CopyPlugin({
            patterns: [{ from: 'src/assets/', to: 'assets/' }],
        }),
    ],
};
