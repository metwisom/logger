import { Logger } from "./logger";


Logger.prototype.log = function (...text: any[]) {
	this.write("white", "log", ...text);
};

Logger.prototype.warn = function (...text: any[]) {
	this.write("orange", "warn", ...text);
};

Logger.prototype.error = function (...text: any[]) {
	this.write("red", "error", ...text);
};

export { Logger };