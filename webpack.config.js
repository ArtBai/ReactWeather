var webpack = require("webpack");
module.exports = {
	entry: "./src/app.js",
	output:  {
		filename: "./build/readyapp.js"
	},
	devServer: {
		inline: true,
		contentBase: "./build",
		watchContentBase: true,
		port: 3000
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: "babel-loader",
				query: {
					presets: ["react", "es2015"]
				}
			}
		]
	}
	// plugins: [
	// 	new webpack.optimize.UglifyJsPlugin()
	// ]
}