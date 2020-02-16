const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'development',
    entry: {
        'frontend/layout/header' : './src/assets/frontend/_layouts/header/header.js',
        'frontend/layout/footer' : './src/assets/frontend/_layouts/footer/footer.js',
        'frontend/page/index' : './src/assets/frontend/_pages/index/index.js',
        'frontend/page/brand' : './src/assets/frontend/_pages/brand/brand.js',
        'frontend/page/contact' : './src/assets/frontend/_pages/contact/contact.js',
    },
    output: {
        path: path.resolve(__dirname),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: path.resolve(__dirname, "node_modules"),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                    "vue-style-loader",
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: () => [autoprefixer()]
                        }
                    },
                    "sass-loader",
                ]
            },
            {
                test: /\.pug$/,
                oneOf: [
                    {
                        resourceQuery: /^\?vue/,
                        use: ['pug-plain-loader']
                    },

                    {
                        use: ['raw-loader', 'pug-plain-loader']
                    }
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.vue', '.scss'],
        modules: ['node_modules'],
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new Dotenv()
    ]
}
