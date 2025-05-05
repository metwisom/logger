import { ProtoLogger } from "./logger";

export class Logger extends ProtoLogger {
	log(...text: any[]): void {
		this.write("log", ...text);
	}

	warn(...text: any[]): void {
		this.write("warn", ...text);
	}

	error(...text: any[]): void {
		this.write("error", ...text);
	}

	clone(): Logger {
		const newLogger = new Logger();
		newLogger._prefix = this._prefix;
		newLogger._isEnabled = this._isEnabled;
		newLogger._currentLevel = this._currentLevel;
		return newLogger;
	}
}