const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDev = false;

module.exports = {
	entry: __dirname + "/src/index.js",
	output: {
		filename: "sedona-blocks.js",
		path: path.resolve(__dirname, "dist")
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				}
			},
			{
				test: /\.less$/,
				use: [
					"css-hot-loader",
					{
						loader: isDev
							? "style-loader"
							: MiniCssExtractPlugin.loader
					},
					"css-loader",
					{
						loader: "less-loader",
						options: {
							paths: [path.resolve(__dirname, "src/common")],
							sourceMap: isDev
						}
					}
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "sedona-blocks.css",
			chunkFilename: "[id].css"
		})
	]
};
