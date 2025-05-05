import * as util from 'util';

export type LogType = "log" | "warn" | "error";

export class ProtoLogger {
	protected _prefix: string = "";
	protected _isEnabled: boolean = true;
	protected _currentLevel: number = 1;

	static logLevels: Record<string, number> = {
		log: 1,
		warn: 2,
		error: 3,
	};

	setPrefix(newPrefix: string): void {
		this._prefix = newPrefix;
	}

	resetPrefix(): void {
		this._prefix = "";
	}

	enable(): void {
		this._isEnabled = true;
	}

	disable(): void {
		this._isEnabled = false;
	}

	setLevel(level: LogType): void {
		const levelNum = ProtoLogger.logLevels[level];
		if (levelNum !== undefined) {
			this._currentLevel = levelNum;
		} else {
			console.error(`Invalid log level: ${level}`);
		}
	}

	write(type:string = "write", ...texts: any[]): void {
		if (!this._isEnabled) {
			return;
		}
		if(ProtoLogger.logLevels[type] != undefined && ProtoLogger.logLevels[type] < this._currentLevel) {
			return;
		}
		const typeOutput = type.toUpperCase().padEnd(10); // Fixed width for alignment
		const date = new Date(new Date().getTime() - (new Date().getTimezoneOffset() * 60 * 1000)).toISOString();
		const localPrefix = this._prefix ? `${this._prefix} - ` : "";
		const prefixPart = `${typeOutput} ${date} - ${localPrefix}`;
		const messageBody = prefixPart + util.format(...texts) + '\r\n';
		if (type === "error") {
			process.stderr.write(messageBody);
		} else {
			process.stdout.write(messageBody);
		}
	}
}