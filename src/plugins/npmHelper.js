var npmHelper = {
	checkTag(list, tag) {
		if (!Array.isArray(list)) return;
		if (typeof tag !== "string") return;

		if (list.indexOf(tag) > -1 && list[list.indexOf(tag)].length === tag.length) return true;
	},

	getTagValue(list, key, separator) {
		if (!Array.isArray(list)) return;
		if (typeof key !== "string") return;
		separator = typeof separator === "string" ? separator : ":";
		
		for(var i = 0; i < list.length; i++) {
			if (list[i].indexOf(key + separator) == 0) {
				return list[i].slice((key + separator).length);
			}
		};
	}
}

export default npmHelper;