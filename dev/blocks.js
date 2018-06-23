"use strict";

const path = require("path");
const fs = require("fs");

let htmlFiles = [];
let blockNames = [];

function fromDir(startPath, filter) {
	if (!fs.existsSync(startPath)) {
		console.log("no dir ", startPath);
		return;
	}

	const files = fs.readdirSync(startPath);
	for (let i = 0; i < files.length; i++) {
		const filename = path.join(startPath, files[i]);
		const stat = fs.lstatSync(filename);
		if (stat.isDirectory()) {
			fromDir(filename, filter); //recurse
		} else if (filename.indexOf(filter) >= 0) {
			htmlFiles.push(filename);
		}
	}
}

fromDir(__dirname + "/../src/", ".html");

blockNames = htmlFiles
	.map(value => {
		return path
			.basename(value)
			.replace(".html", "")
			.trim();
	});

	console.log(blockNames.sort());

module.exports = {
	paths: htmlFiles,
	names: blockNames
};
