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
        'frontend/page/eat-drink' : './src/assets/frontend/_pages/eat-drink/eat-drink.js',
        'frontend/page/celebrate' : './src/assets/frontend/_pages/celebrate/celebrate.js',
        'frontend/page/corporate' : './src/assets/frontend/_pages/corporate/corporate.js',
        'frontend/page/happening' : './src/assets/frontend/_pages/happening/happening.js',
        'frontend/page/sitemap' : './src/assets/frontend/_pages/sitemap/sitemap.js',
        'frontend/page/contact-us' : './src/assets/frontend/_pages/contact-us/contact-us.js',
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
