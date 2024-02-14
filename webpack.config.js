const path = require('path')

module.exports = {
  mode: 'development', //when you are working on development un-comment this 
  entry: './src/index.ts', // Entry point of your library
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory for bundled files
    filename: 'devsinc-lib.js', // Name of the bundled file
    library: 'devsinc-lib', // Name of your library
    libraryTarget: 'umd', // Universal Module Definition format
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Process CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(ts|tsx)$/, // Process TypeScript files
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx','.ts', '.js'], // Resolve both TypeScript and JavaScript files
  },
};
