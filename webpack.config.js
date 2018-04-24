const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {

  // This is the entry point or start of our vue app
  entry: './public/index.js',

  output: {
    filename: 'bundle.js'
  },

  mode: 'development',

  resolve: {
    alias: {
      vue: './vue.js'
    },
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },

  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env']
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax', // <style lang="sass">
            js: [{
              loader: 'babel-loader',
              options: {
                presets: ['env']
              }
            }]
          },
          extractCSS: true
        },
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new webpack.LoaderOptionsPlugin({
      options: {
        sass: {
          import: [path.resolve(__dirname, './src/styles/index.sass')]
        }
      }
    })
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: JSON.stringify('development')
    //   }
    // })
  ],
  devtool: '#eval-source-map',
  devServer: {
    port: 8000
  }
}