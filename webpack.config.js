var config = {
  entry: './src/js/pages/login.js',
  output: {
    path:'./dist/js/',
    filename: 'login.js'
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
