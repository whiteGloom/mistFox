import fs from "fs";
import isValidPath from "is-valid-path";

class pathsLoader {
	constructor() {
		this.paths = [];
	}

	addPathFromString(string) {
		this._handlePath(string);
	}

	addPathsFromFile(filePath) {
		var filePathContent = fs.readFileSync(filePath, "utf8").split("\n");

		for (var i = 0; i < filePathContent.length; i++) {
			this._handlePath(filePathContent[i])
		};
	}

	getPaths() {
		return this.paths;
	}

	_handlePath(path) {
		if (isValidPath(path) && this.paths.indexOf(path) === -1 && path.length > 0) this.paths.push(path);
		return false;
	}
}

export default new pathsLoader