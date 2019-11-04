import fs from "fs";

var path = process.cwd();

fs.writeFileSync(path + "profilePaths.txt",
	"Below the dashed line, enter the paths to Firefox profiles (no delimiters, one path per line) to which styles will be applied."
	+ "\nПод пунктирной линией введите пути к профилям Firefox (без разделителей, один путь на одну строку), к которым будут применены стили."
	+ "\n\nExample:"
	+ "\n\nC:\\Program Files (x86)"
	+ "\nC:\\Users"
	+ "\nC:\\Users\\**username**\\AppData\\Roaming\\Mozilla\\Firefox\\Profiles\\**profile** - Something like this"
	+ "\n\n-----------------\n"
);