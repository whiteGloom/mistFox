import WebpackLoader from "webpack-loader";
import colors from "colors/safe";
import fs from "fs";

import glConfig from "./globalConfig.js";
import npmHelper from "./plugins/npmHelper.js";
import PathsLoader from "./plugins/PathsLoader.js";
import makeConfig from "./makeWebpackConfig.js";


const pathsLoader = new PathsLoader();
const webpackLoader = new WebpackLoader();

const npmArguments = process.argv.slice(2);
const workFolder = process.cwd();
const pathsFile = "profilePaths.txt";

var cssOutputName = glConfig.cssOutputName;



// Init

webpackLoader.makeNewConfig("main", [makeConfig({workFolder})], "development");

// Simple build of styles
if (npmHelper.checkTag(npmArguments, "simpleBuild")) simpleBuildMode();

// Build of styles and auto copying them to profile folder
if (npmHelper.checkTag(npmArguments, "stylesAutoApply")) stylesAutoApplyMode();



// Functions

function simpleBuildMode() {
	webpackLoader.run();
}

function stylesAutoApplyMode() {
	pathsLoader.addPathFromString(npmHelper.getTagValue(npmArguments, "path"));
	pathsLoader.addPathsFromFile(pathsFile, "\n", 10);
	var paths = pathsLoader.getPaths();

	if (!paths.length) {
		console.log(colors.red.underline("\n\nThere is no paths!\n\n"));
		return;
	}

	webpackLoader.run(stats => {
		paths.forEach(path => {
			try {
				fs.statSync(path + "/chrome/");
				fs.copyFileSync("./prod/" + cssOutputName, path + "/chrome/" + cssOutputName);
			} catch(err) {
				fs.mkdirSync(path + "/chrome/");
				fs.copyFileSync("./prod/" + cssOutputName, path + "/chrome/" + cssOutputName);
			} finally {
				console.log(colors.green("The styles was successfully copied to: ") + colors.underline.green(path + "/chrome/"));
			};
		});
	});
}