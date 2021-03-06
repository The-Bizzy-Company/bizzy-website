const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {TsConfigPathsPlugin} = require('awesome-typescript-loader');

const PATHS = {
  app: `${__dirname}/app`,
  public: `${__dirname}/public`,
  rootPublic: '/public/',
};

module.exports = {
  mode: process.env.PRODUCTION ? 'production' : 'development',
  devServer: {
    contentBase: __dirname,
    port: 3000,
    compress: true,
    historyApiFallback: {
      rewrites: [{from: /^\/[^.]+$/, to: '/index.html'}],
    },
  },
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: ['babel-polyfill', PATHS.app],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [path.resolve('./node_modules')],
    plugins: [
      new TsConfigPathsPlugin({
        configFileName: path.resolve(`./tsconfig.json`),
        compiler: 'typescript',
      }),
    ],
  },
  output: {
    path: PATHS.public,
    filename: 'bundle.js',
    publicPath: PATHS.rootPublic,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index-template.html',
      filename: '../index.html',
      minify: true,
      hash: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg|png|otf)(\?.*$|$)/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
      {
        test: /\.scss$/,
        loader: [
          'style-loader',
          {
            loader: 'css-loader',
            query: {
              namedExport: true,
              modules: true,
              importLoaders: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              data: fs.readFileSync('./app/style-modules/_all.scss'),
              includePaths: ['./app/style-modules'],
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /(node_modules)/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015'],
          plugins: [
            'transform-decorators-legacy',
            'transform-object-rest-spread',
          ],
        },
      },
    ],
  },
};
