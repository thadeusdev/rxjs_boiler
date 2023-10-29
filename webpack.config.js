module.exports = {
  entry: __dirname + '/src/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'app.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply the loader only to JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // Use @babel/preset-env for compiling JavaScript
          },
        },
      },
    ],
  },
};