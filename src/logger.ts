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


Logger.prototype.write = function (text: string, color: LoggerColor, type: type = "write") {
	const typeOutput = type.toUpperCase() + new Array(7).join(" ").slice(type.length, 10);
	const date = new Date().toISOString();
	const localPrefix = this.prefix != "" ? this.prefix + " - " : "";
	const messageBody = (boldColorList[color] || boldColorList.reset) +
		`${typeOutput}` +
		boldColorList.reset +
		(dimColorList[color] || dimColorList.reset) +
		`${date} - ${localPrefix}${text}\r\n` +
		dimColorList.reset;
	if (type === "error") {
		if (this.isEnabled) process.stderr.write(messageBody);
	} else {
		if (this.isEnabled) process.stdout.write(messageBody);
	}
};


export { Logger };