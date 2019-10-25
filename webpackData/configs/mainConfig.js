import RemoveServiceJsOutputsPlugin from "../localPlugins/RemoveServiceJsOutputsPlugin.js";

function makeMainConfig(options) {
	options = options ? options : {};
	var workFolder = options.workFolder;

	var config = {
		mode: "development",
		entry: {},
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

	config.entry[options.entryChunkName] = workFolder + "/src/" + options.entryChunkName + ".js";
	console.log(config.entry[options.entryChunkName])

	return config
};

export default makeMainConfig