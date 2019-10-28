var npmHelper = {
	checkTag(list, tag) {
		if (typeof tag !== "string") return;

		if (list.indexOf(tag) > -1) return true;
		return false;
	},

	getTagValue(list, mark, separator) {
		separator = typeof separator === "string" ? separator : ":";
		if (typeof mark !== "string") return;

		for(var i = 0; i < list.length; i++) {
			if (list[i].indexOf(mark + separator) == 0) {
				return list[i].slice((mark + separator).length);
			}
		};
		return false;
	}
}

export default npmHelper;