const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {

  // This is the entry point or start of our vue app
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },

  mode: 'development',

  resolve: {
    // alias: {
    //   vue: './vue.js'
    // },
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },

  module: {
    rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        ),
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
          // extractCSS: true
        },
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax'
        ],
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      // {
      //   test: /\.(png|jpg|gif|svg|jpeg)$/,
      //   use: [{
      //     loader: 'file-loader',
      //     options: {
      //       // name: '[path][name].[ext]?[hash]',
      //       // publicPath: './'
      //     }
      //   }]
      // },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|jpeg)$/,
        use: [{
          loader: "url-loader",
          options: {
            limit: 20000,
            name: '[path][name].[ext]',
            // publicPath: './'
          }
        }]
      },
      // {
      //   test: /\.css$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: "style-loader",
      //     use: "css-loader"
      //   })
      // },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    // new ExtractTextPlugin('style.css'),
    // new webpack.LoaderOptionsPlugin({
    //   options: {
    //     sass: {
    //       import: [path.resolve(__dirname, './src/styles/index.sass')]
    //     }
    //   }
    // })
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