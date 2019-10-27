var cache = {};

function importAll (r) {
	r.keys().forEach(key => cache[key] = r(key));
}

importAll(require.context("./styles/", true, /\.(css)/));