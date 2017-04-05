var webpack = require('webpack');
var path  = require('path');
module.exports = {
  devtool : 'eval',
  entry : path.join(__dirname,'/public/script.js'),

  output : {
    path : path.join(__dirname,'/public'),
    filename: "bundle.js",
    publicPath : '/'
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      comments: false,
      minimize: true
    })
    // new webpack.NoEmitOnErrorsPlugin(),
    // new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders:[
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader:'babel-loader',
      },
      {
        test: /\.css$/,
        exclude : /(node_modules)/,
        loader: "style-loader!css-loader"
      }
    ]
  }
}
