var config = {
  entry: './src/js/pages/404.js',
  output: {
    path:'./dist/js/',
    filename: '404.js'
  },
  devServer: {
    inline: true,
    port: 8080
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',     
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
module.exports = config;
