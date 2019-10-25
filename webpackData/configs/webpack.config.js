import merge from "webpack-merge";

import makeMainConfig from "./makeMainConfig.js";
import makeStaticConfig from "./makeStaticConfig.js";
import makeStylesConfig from "./makeStylesConfig.js";

var workFolder = process.cwd();

var config = merge([
	makeMainConfig({workFolder}),
	makeStylesConfig()
]);

export default config;