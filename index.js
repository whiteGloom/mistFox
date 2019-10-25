import webpack from "webpack";
import helper from "./src/helper.js";
import pathsLoader from "./src/profilePathLoader.js";
import makeWebpackConfig from "./webpackData/configs/webpack.config.js";

;(function() {
	// Config
	const npmArguments = process.argv.slice(2);

	const workFolder = process.cwd();
	const entryChunkName = "main";
	const cssOutputName = "userChrome";
	const webpackConfig = makeWebpackConfig({workFolder, entryChunkName, cssOutputName});
	const pathsFile = "profilePaths.txt";


	// Simple build of styles
	if (helper.checkTag(npmArguments, "simpleBuild")) {
		initWebpack();
	}

	// Auto applying builded styles to browser
	if (helper.checkTag(npmArguments, "autoApplyStyles")) {
		var paths = pathsLoader(pathsFile, helper.getTagValue(npmArguments, "path"));
		if (!Array.isArray(paths) && paths.length === 0) {
			console.log("There is wrong paths!");
			return;
		}

		initWebpack(stats => {
			stats.compilation.chunks.forEach(chunk => {
				if (chunk.name === entryChunkName) {
					var buildedStylesFileName = chunk.files[chunk.files.indexOf(cssOutputName + ".css")];
					paths.forEach(path => {
						
					});
				}
			});
		});
	}

	function initWebpack(callback) {
		var webpackConfigured = webpack(webpackConfig);

		webpackConfigured.run(handler);

		function handler(err, stats) {
			var err = false;

			if (stats && stats.compilation && stats.compilation.errors.length !== 0) {
				console.log(stats.compilation.errors);
				err = true;
			}
			if (err) {
				console.log(err)
				err = true;
			}

			if (err !== true) {
				console.log("\n\nCompiled successfully.\n\n")
				if (typeof callback == "function") callback(stats);
			};
		}
	}
})();