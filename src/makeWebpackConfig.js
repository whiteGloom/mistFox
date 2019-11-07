import removeServiceOutputsPlugin from "remove-service-outputs-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import glConfig from "./globalConfig.js";

const cssOutputName = glConfig.cssOutputName;

export default function(options) {
	var workFolder = options.workFolder;
	
	var cfg = {
		entry: {
			stylesLoader: workFolder + "/src/theme/stylesEntry.js"
		},
		output: {
			path: workFolder + "/prod/",
			filename: data => {
				switch (data.chunk.name) {
					default:
						return "[name].js"
				}
			}
		},
		module: {
			rules: [
				{
					test: /\.(css)/,
					use: [
						"style-loader",
						MiniCssExtractPlugin.loader,
						{ loader: "css-loader", options: { url: false } }
					],
					exclude: /[\\/]node_modules[\\/]/
				}
			]
		},
		plugins: [
			new removeServiceOutputsPlugin([
				["stylesLoader", /.*\.js$/]
			]),
			new MiniCssExtractPlugin({
				filename: cssOutputName
			})
		],
		devtool: "none"
	};

	return cfg;
}