"use strict";

const path = require("path");
const webpack = require("webpack");
const WebpackBar = require("webpackbar");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");

const Blocks = require("./blocks");

const isDev = true;

const plugins = [
	/*new WebpackBar({
		name: "Sedona Blocks"
	}),*/
	new MiniCssExtractPlugin({
		filename: "[name].css",
		chunkFilename: "[id].css"
	}),
	new HtmlWebpackPlugin({
		filename: "index.html",
		title: "Sedona Blocks",
		template: "dev/index.template.html",
		test: "sdsdfsdf",
		blocks: Blocks.names
	})
];

Blocks.names.forEach(value => {
	plugins.push(
		new HtmlWebpackPlugin({
			filename: `${value}.html`,
			title: value,
			template: "dev/block.template.html",
			block: `${value}/${value}.html`,
			alwaysWriteToDisk: true
		})
	);
});

plugins.push(
	new HtmlWebpackHarddiskPlugin({
		outputPath: path.resolve(__dirname, "../dev/public")
	})
);

module.exports = {
	mode: isDev ? "development" : "production",
	entry: __dirname + "/app.js",
	output: {
		filename: "app.min.js",
		path: path.resolve(__dirname, "../dev/public")
	},
	devtool: "source-map",
	//stats: "errors-only",
	devServer: {
		contentBase: path.resolve(__dirname, "../dev/public"),
		compress: true,
		watchContentBase: true,
		port: 3000,
		clientLogLevel: "error",
		hot: true,
		stats: {
			all: undefined,
			assets: true,
			cached: true,
			cachedAssets: true,
			reasons: false,
			modules: false
		}
	},
	module: {
		rules: [
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
							paths: [
								path.resolve(__dirname, "../src/common")
							],
							sourceMap: isDev
						}
					}
				]
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				}
			}
		]
	},
	plugins: plugins
};
