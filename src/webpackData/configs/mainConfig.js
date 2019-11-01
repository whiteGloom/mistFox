import removeServiceOutputsPlugin from "remove-service-outputs-plugin";

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
						return "[name].js";
				}
			}
		},
		module: {
			rules: [

			]
		},
		plugins: [
			new removeServiceOutputsPlugin([[options.entryChunkName, /.*\.js$/]])
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

	// Custom propertyes
	config.entry[options.entryChunkName] = workFolder + "/src/" + options.entryChunkName + ".js";

	return config;
};

export default makeMainConfig;