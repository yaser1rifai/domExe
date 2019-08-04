//at the beginning of the file
const HtmlWebpackPlugin = require("html-webpack-plugin");

// at the beginning of the file
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// at the beginning of the file
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");


//----------------------------------------------------

module.exports = {
//in the configuration -> plugins
plugins: [
    new HtmlWebpackPlugin({
      title: "Setting up webpack 4",
      template: "index.html",
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),

// in the configuration -> plugins
                new MiniCssExtractPlugin({
          filename: "assets/css/styles.css"
        }),
  ],

  module:  {
    rules: [
// in the configuration -> module -> rules

    //babel
    {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
                 }
    },

// in the configuration -> module -> rules

    //style and css loader
    // in the configuration -> module -> rules

    //style and css loader
    {
        test: /\.css$/,
        use: ["style-loader", "css-loader", 'sass-loader']
    },

    // in the configuration -> module -> rules
    {
        test: [/.css$|.scss$/],
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },


// in the configuration -> module -> rules

    //file loader
    {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/'
            }
          }
        ]
    },


// in the configuration -> module -> rules change

      //style and css extract
      {
        test: [/.css$|.scss$/],
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader", {
          loader: 'postcss-loader',
          options: {
            plugins: () => [require('autoprefixer')({
              'browsers': ['> 1%', 'last 2 versions']
            })],
          }
        }]
      },


// in the configuration -> module -> rules 

      //fonts
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/fonts/',
            publicPath: '../fonts'
          }
        }]
      },

],
},

// in the configuration -> optimization
//module.exports = {
  //  ...
    
      optimization: {
        minimizer: [
          new UglifyJsPlugin(),
          new OptimizeCSSAssetsPlugin()
        ]
      },

};

//----------------------------------------------------
const path = require("path");

module.exports = {
  entry: "./src/assets/js/index.js",
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "assets/js/bundle.js",
    publicPath: "",
},
};