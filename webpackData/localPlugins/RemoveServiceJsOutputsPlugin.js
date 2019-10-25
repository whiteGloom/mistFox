// SuppressEntryChunksPlugin.js.
// Author of original plugin: https://stackoverflow.com/users/647002/medmunds || https://github.com/medmunds
// Original version of plugin: https://stackoverflow.com/questions/37408873/delete-or-not-create-a-file-for-each-entry-in-webpack

class RemoveServiceJsOutputsPlugin {
	constructor(options) {
		if (!Array.isArray(options)) {
			throw new Error("RemoveServiceJsOutputsPlugin requires an array of entry names to strip, but gets:" + typeof options);
		}

		this.options = {toSkip: options};
	}

	apply(compiler) {
		compiler.plugin('emit', (compilation, callback) => {
			compilation.chunks.forEach((chunk) => {
				if (this.options.toSkip.indexOf(chunk.name) > -1) {
					chunk.files.forEach((file) => {
						if (file.match(/.*\.js$/)) {
							delete compilation.assets[file];
						}
					});
				}
			});

			callback();
		});
	}
}

export default RemoveServiceJsOutputsPlugin;