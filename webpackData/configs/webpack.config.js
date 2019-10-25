import merge from "webpack-merge";

import mainConfig from "./mainConfig.js";
import stylesConfig from "./stylesConfig.js";

function makeConfig(options) {
	return merge([
		mainConfig({workFolder: options.workFolder, entryChunkName: options.entryChunkName}),
		stylesConfig({cssOutputName: options.cssOutputName})
	]);
}

export default makeConfig;