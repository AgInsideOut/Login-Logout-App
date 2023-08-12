const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output bundle file
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Include '.jsx' if you're using JSX files
    modules: ['node_modules']
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply babel-loader for .js files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};

