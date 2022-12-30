import { Logger } from "./logger";


Logger.prototype.log = function (text: string) {
	this.write(text, "white", "log");
};

Logger.prototype.warn = function (text: string) {
	this.write(text, "orange", "warn");
};

Logger.prototype.error = function (text: string) {
	this.write(text, "red", "error");
};

export { Logger };