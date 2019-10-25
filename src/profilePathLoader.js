import fs from "fs";
import isValidPath from "is-valid-path";

function pathsLoader(pathsFile, onlinePath) {
	var paths = [];

	handleOnlinePath();
	handleOfflinePath();

	return paths;

	function handleOnlinePath() {
		if (isValidPath(onlinePath)) {
			paths.push(onlinePath);
		}
	}

	function handleOfflinePath() {
		var offlinePaths = fs.readFileSync(pathsFile, "utf8").split("\n");

		for (var i = 0; i > offlinePaths.length; i++) {
			if (isValidPath(offlinePaths[i]) && paths.indexOf(offlinePaths[i]) === -1) {
				paths.push(offlinePaths[i]);
			}
		};
	}
}

export default pathsLoader