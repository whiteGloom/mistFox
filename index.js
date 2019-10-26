import colors from "colors/safe";
import fs from "fs";

import helper from "./src/helper.js";
import pathsLoader from "./src/pathsLoader.js";
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
	pathsLoader.addPathsFromFile(pathsFile, 10);
	var paths = pathsLoader.getPaths();

	if (paths.length === 0) {
		console.log(colors.red.underline("\n\nThere is no paths!\n\n"));
		return;
	}

	webpackLoader.run(stats => {
		paths.forEach(path => {
			try {
				fs.statSync(path + "/chrome/");
				fs.copyFileSync("./prod/" + cssOutputName + ".css", path + "/chrome/" + cssOutputName + ".css");
			} catch(err) {
				fs.mkdirSync(path + "/chrome/");
				fs.copyFileSync("./prod/" + cssOutputName + ".css", path + "/chrome/" + cssOutputName + ".css");
			};
		});
	});
}