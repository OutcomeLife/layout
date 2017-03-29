module.exports = {
  entry: './app/Root.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    alias: {

    },
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      //this is for sass loader
      {
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
    exclude: /node_modules/
      }
    ]
  }
};
