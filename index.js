import removeServiceOutputsPlugin from "remove-service-outputs-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import WebpackLoader from "webpack-loader";
import colors from "colors/safe";
import fs from "fs";

import npmHelper from "./src/npmHelper.js";
import PathsLoader from "./src/PathsLoader.js";

const pathsLoader = new PathsLoader();
const webpackLoader = new WebpackLoader();

//
// Config
//

const npmArguments = process.argv.slice(2);
const workFolder = process.cwd();
const pathsFile = "profilePaths.txt";

// Webpack config
var entryChunkName = "stylesLoader",
	cssOutputName = "userChrome.css";
	
webpackLoader.makeNewConfig("main", {
	entry: {
		stylesLoader: workFolder + "/src/stylesLoader.js"
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
			[entryChunkName, /.*\.js$/]
		]),
		new MiniCssExtractPlugin({
			filename: cssOutputName
		})
	],
	devtool: "none"
}, "development");


//
// Init part
//

// Simple build of styles
if (npmHelper.checkTag(npmArguments, "simpleBuild")) simpleBuildMode();

// Build of styles and auto copying them to profile folder
if (npmHelper.checkTag(npmArguments, "stylesAutoApply")) stylesAutoApplyMode();


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