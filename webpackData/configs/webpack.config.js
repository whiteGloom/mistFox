import merge from "webpack-merge";

import mainConfig from "./mainConfig.js";
import stylesConfig from "./stylesConfig.js";

var workFolder = process.cwd();

var config = merge([
	mainConfig({workFolder}),
	stylesConfig()
]);

export default config;