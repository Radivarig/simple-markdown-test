module.exports = {
  entry: './src/entry.js'
, output: {
    path: './'
  , filename: 'bundle.js'
  }
, devtool: 'source-map'
, module: {
    loaders:  [
      { test: /\.jsx?$/, loaders: ['jsx-loader'], exclude: '/node_modules/'}
    ]
  }
}
