import fs from "fs";

class PathsLoader {
	constructor() {
		this.paths = [];
	}

	addPathFromString(string) {
		if (typeof string !== "string") return;
		this._handlePath(string);
	}

	addPathsFromFile(filePath, separator, skipLines) {
		if (typeof filePath !== "string") return;

		separator = typeof separator === "string" ? separator : "\n";
		skipLines = typeof skipLines === "number" ? skipLines : 0;

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
		} finally {	return };
	}
}

export default PathsLoader;