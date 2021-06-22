require('dotenv').config()
var path = require('path');
var webpack = require('webpack');
module.exports = {
	mode: process.env.NODE_REACT_ENV,
	entry: path.join(__dirname, 'app.js'),
	output: {
		path: path.join(__dirname, './public'),
		filename: 'bundle.js'
	},
	// resolve: {
	// 	extensions: ['*', '.js', '.jsx', '.css'],
	// 	modules: [
    //   'node_modules'
    // ]
	// },
	module: {
		rules: [{
			test: /.jsx?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: ['@babel/preset-env', '@babel/preset-react']
			}
		},
		{
			test: /\.css$/i,
			use: ['style-loader','css-loader']
		}]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		hot: true,
		historyApiFallback: true
	}
}