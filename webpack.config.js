const path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app.js',
  devtool: 'source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer:{
  	port: 3030,
  	progress: true,
  	contentBase: './dist'
  },
  module:{
		rules:[
			{
        test: /\.(js|jsx)$/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
            }
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg|png)$/,
        use: ['file-loader']
      }
		]
	},
  plugins:[
  	new HtmlWebpackPlugin({
  		template:'./dist/template.html',
  		filename:'./index.html'
  	})
  ]
};