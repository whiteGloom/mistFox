import fs from "fs";
import isValidPath from "is-valid-path";

class pathsLoader {
	constructor() {
		this.paths = [];
	}

	addPathFromString(string) {
		this._handlePath(string);
	}

	addPathsFromFile(filePath, skip) {
		var filePathContent = fs.readFileSync(filePath, "utf8").split("\n");

		for (var i = skip; i < filePathContent.length; i++) {
			this._handlePath(filePathContent[i]);
		};
	}

	getPaths() {
		return this.paths;
	}

	_handlePath(path) {
		try {
			fs.statSync(path + "/");
			if (this.paths.indexOf(path) === -1 && path.length > 0) this.paths.push(path);
		} finally {
			return
		};
	}
}

export default new pathsLoader