import RemoveServiceJsOutputsPlugin from "../localPlugins/RemoveServiceJsOutputsPlugin.js";

function makeMainConfig(options) {
	options = options ? options : {};
	var workFolder = options.workFolder;

	return {
		mode: "development",
		entry: {
			"main": workFolder + "/src/main.js"
		},
		output: {
			path: workFolder + "/prod/",
			filename: (data) => {
				switch(data.chunk.name) {
					default: 
						return "/service/serviceScripts.js";
				}
			}
		},
		module: {
			rules: [

			]
		},
		plugins: [
			new RemoveServiceJsOutputsPlugin(["main"])
		],
		optimization: {
			splitChunks: {
				cacheGroups: {}
			}
		},
		resolve : {
			
		},
		devtool: "none",
	};
};

export default makeMainConfig