import { LoggerColor, boldColorList, dimColorList } from "./color";


type type = "write" | "log" | "warn" | "error";

function Logger () {
}

Logger.prototype.prefix = "";
Logger.prototype.isEnabled = true;
Logger.prototype.setPrefix = function (newPrefix: string) {
	this.prefix = newPrefix;
};
Logger.prototype.resetPrefix = function () {
	this.prefix = "";
};
Logger.prototype.enable = function () {
	this.isEnabled = true;
};
Logger.prototype.disable = function () {
	this.isEnabled = false;
};


Logger.prototype.write = function (color: LoggerColor, type: type = "write", ...texts: any[]) {
	const typeOutput = type.toUpperCase() + new Array(7).join(" ").slice(type.length, 10);
	const date = new Date().toISOString();
	const localPrefix = this.prefix != "" ? this.prefix + " - " : "";
	const messageBody = (boldColorList[color] || boldColorList.reset) +
		`${typeOutput}` +
		boldColorList.reset +
		(dimColorList[color] || dimColorList.reset) +
		`${date} - ${localPrefix}${texts.map(item => typeof item == 'object' ? JSON.stringify(item) : item).join(" ")}\r\n` +
		dimColorList.reset;
	//console.log('|'+texts.join(' ')+'|')
	if (type === "error") {
		if (this.isEnabled) process.stderr.write(messageBody);
	} else {
		if (this.isEnabled) process.stdout.write(messageBody);
	}
};


export { Logger };