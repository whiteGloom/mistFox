var helper = {
	getTagValue(list, mark) {
		if (typeof mark !== "string") return;

		for(var i = 0; i < list.length; i++) {
			if (list[i].indexOf(mark) == 0) {
				return list[i].slice(mark.length + 1);
			}
		};
		return false;
	},

	checkTag(list, tag) {
		if (typeof tag !== "string") return;

		if (list.indexOf(tag) > -1) return true;
		return false;
	}
}

export default helper;