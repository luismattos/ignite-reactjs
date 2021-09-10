const { resolve } = require('path');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {

  // development or production
  mode: isDevelopment ? 'development' : 'production',

  devtool: isDevelopment ? 'eval-source-map' : 'source-map',

  // arquivo principal da aplicacao
  entry: path.resolve(__dirname, 'src', 'index.tsx'),

  // arquivo de saida gerado
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  // por padrao ele le apenas .js, portanto precisamos dizer que tambem será 
  // necessario levar em consideracao arquivos .jsx
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    hot: true,
  },

  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ].filter(Boolean),

  // ficarao as configuracoes de como a app vai se comportar quando estiver
  // importando cada um dos tipos de arquivo importados.
  module: {
    rules: [
      {
        test: /\.(j|t)sx$/,
        exclude: /node_modules/,
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel')
            ].filter(Boolean),
          },
        },
      },
      {
        test: /\.scss/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};