import webpack from "webpack";
import webpackConfig from "./webpackData/configs/webpack.config.js";

var webpackConfigured = webpack(webpackConfig);

webpackConfigured.run((err, stats) => {
	var err = false;

	if (stats && stats.compilation && stats.compilation.errors.length !== 0) {
		console.log(stats.compilation.errors);
		err = true;
	}
	if (err) {
		console.log(err)
		err = true;
	}

	if (err !== true) console.log("\n\nCompiled successfully.\n\n");
});