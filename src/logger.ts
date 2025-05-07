import * as util from 'node:util';

export type LogType = "log" | "warn" | "error";

export class ProtoLogger {
	protected _prefix: string = "";
	protected _isEnabled: boolean = true;
	protected _currentLevel: number = 1;

	static logLevels: Record<LogType, number> = {
		log: 1,
		warn: 2,
		error: 3,
	};

	/**
	 * Sets a new prefix for log messages.
	 * @param newPrefix - The prefix to prepend to log messages.
	 * @example
	 * ```ts
	 * const logger = new ProtoLogger();
	 * logger.setPrefix("APP");
	 * logger.write("log", "Test"); // Logs: LOG        <timestamp> - APP - Test
	 * ```
	 */
	setPrefix(newPrefix: string): void {
		this._prefix = newPrefix;
	}

	/**
	 * Resets the prefix to an empty string.
	 * @example
	 * ```ts
	 * const logger = new ProtoLogger();
	 * logger.setPrefix("APP");
	 * logger.resetPrefix();
	 * logger.write("log", "Test"); // Logs: LOG        <timestamp> - Test
	 * ```
	 */
	resetPrefix(): void {
		this._prefix = "";
	}

	/**
	 * Enables logging.
	 * @example
	 * ```ts
	 * const logger = new ProtoLogger();
	 * logger.disable();
	 * logger.enable();
	 * logger.write("log", "Test"); // Logging is enabled, message is written
	 * ```
	 */
	enable(): void {
		this._isEnabled = true;
	}

	/**
	 * Disables logging.
	 * @example
	 * ```ts
	 * const logger = new ProtoLogger();
	 * logger.disable();
	 * logger.write("log", "Test"); // No output, logging is disabled
	 * ```
	 */
	disable(): void {
		this._isEnabled = false;
	}

	/**
	 * Sets the logging level based on the provided log type.
	 * @param level - The log level to set ("log", "warn", or "error").
	 * @throws {Error} If the provided log level is invalid.
	 * @example
	 * ```ts
	 * const logger = new ProtoLogger();
	 * logger.setLevel("warn");
	 * logger.write("log", "Test"); // No output, level is below "warn"
	 * logger.write("warn", "Test"); // Logs: WARN       <timestamp> - Test
	 * ```
	 */
	setLevel(level: LogType): void {
		const levelNum = ProtoLogger.logLevels[level];
		if (levelNum !== undefined) {
			this._currentLevel = levelNum;
		} else {
			console.error(`Invalid log level: ${level}`);
		}
	}

	/**
	 * Writes a log message with the specified type and content.
	 * @param type - The type of log message ("log", "warn", "error", or "write"). Defaults to "write".
	 * @param texts - The message(s) to log. Multiple arguments are formatted using util.format.
	 * @example
	 * ```ts
	 * const logger = new ProtoLogger();
	 * logger.write("log", "User:", "Alice"); // Logs: LOG        <timestamp> - User: Alice
	 * logger.write("error", "Failed"); // Logs to stderr: ERROR      <timestamp> - Failed
	 * ```
	 */
	write(type: LogType = "write" as LogType, ...texts: any[]): void {
		if (!this._isEnabled || (ProtoLogger.logLevels[type] || 1) < this._currentLevel) {
			return;
		}
		const typeOutput = type.toUpperCase().padEnd(10);
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