const path = require('path');

module.exports = {
  // Entry point of your application
  entry: './src/index.js',
  
  // Output configuration
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  
  // Module rules for handling different types of files
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(mp4)$/,
        type: 'asset/resource',
      },
      // Add other rules for CSS, images, etc. as needed
    ],
  },
  
  // Development server configuration (optional)
  devServer: {
    static: './dist',
  },
  
  // Plugins configuration (optional)
  plugins: [
    // Add any Webpack plugins you use here
  ]