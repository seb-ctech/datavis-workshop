module.exports = {
  entry: './index.js',
  output: {
    filename: 'app.js',
    path: __dirname
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
    ignored: /node_modules/,
    stdin: true
  },
};