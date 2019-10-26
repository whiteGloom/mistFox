import helper from "./src/helper.js";
import pathsLoader from "./src/pathsLoader.js";
import colors from "colors/safe";
import webpackLoader from "./src/webpackData/webpackLoader.js";

const npmArguments = process.argv.slice(2);
const workFolder = process.cwd();
const pathsFile = "profilePaths.txt";

// Webpack config
var cssOutputName = "userChrome",
	entryChunkName = "main";
webpackLoader.makeConfig({workFolder, entryChunkName, cssOutputName});

// Simple build of styles
if (helper.checkTag(npmArguments, "simpleBuild")) simpleBuildMode();

// Auto applying builded styles to browser
if (helper.checkTag(npmArguments, "stylesAutoApply")) stylesAutoApplyMode();



function simpleBuildMode() {
	webpackLoader.run();
}

function stylesAutoApplyMode() {
	pathsLoader.addPathFromString(helper.getTagValue(npmArguments, "path"));
	pathsLoader.addPathsFromFile(pathsFile);
	var paths = pathsLoader.getPaths();

	if (paths.length === 0) {
		console.log(colors.red.underline("\n\nThere is no paths!\n\n"));
		return;
	}

	webpackLoader.run(stats => {
		stats.compilation.chunks.forEach(chunk => {
			if (chunk.name === entryChunkName) {
				var buildedStylesFileName = chunk.files[chunk.files.indexOf(cssOutputName + ".css")];
				paths.forEach(path => {
					
				});
			}
		});
	});
}