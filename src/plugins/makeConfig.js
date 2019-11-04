import removeServiceOutputsPlugin from "remove-service-outputs-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

function makeConfig(options) {
	var workFolder = options.workFolder;
	var chunkName = options.chunkName;
	var cssOutputName = options.cssOutputName;
	
	var cfg = {
		entry: {},
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
				[chunkName, /.*\.js$/]
			]),
			new MiniCssExtractPlugin({
				filename: cssOutputName
			})
		],
		devtool: "none"
	};
	cfg.entry[chunkName] = workFolder + "/src/stylesEntryLoader.js";

	return cfg;
}

export default makeConfig;