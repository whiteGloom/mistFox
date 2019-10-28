import fs from "fs";
import isValidPath from "is-valid-path";

class PathsLoader {
	constructor() {
		this.paths = [];
	}

	addPathFromString(string) {
		this._handlePath(string);
	}

	addPathsFromFile(filePath, separator, skipLines) {
		separator = typeof separator === "string" ? separator : "\n";

		var filePathContent = fs.readFileSync(filePath, "utf8").split(separator);

		for (var i = skipLines; i < filePathContent.length; i++) {
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

export default PathsLoader;