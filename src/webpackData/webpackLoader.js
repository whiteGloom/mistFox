import webpack from "webpack";
import merge from "webpack-merge";
import colors from "colors/safe";

import mainConfig from "./configs/mainConfig.js";
import stylesConfig from "./configs/stylesConfig.js";

class WebpackLoader {
	constructor() {
		this.config = {};
	}

	makeConfig(options) {
		var options = typeof options === "object" ? options : {};

		this.config = merge([
			mainConfig({workFolder: options.workFolder, entryChunkName: options.entryChunkName}),
			stylesConfig({cssOutputName: options.cssOutputName})
		]);
	}

	run(callback) {
		var webpackConfigured = webpack(this.config);

		webpackConfigured.run(handler);

		function handler(err, stats) {
			var err = false;

			if (stats && stats.compilation && stats.compilation.errors.length !== 0) {
				console.log(stats.compilation.errors);
				console.log(colors.red.underline("\n\nCompiled with errors!\n\n"));
				err = true;
			}
			if (err) {
				console.log(err)
				console.log(colors.red.underline("\n\nCompiled with errors!\n\n"));
				err = true;
			}

			if (err !== true) {
				console.log(colors.green.underline("\n\nCompiled successfully.\n\n"));
				if (typeof callback == "function") callback(stats);
			}
		}
	}
}

export default WebpackLoader;