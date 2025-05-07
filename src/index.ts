import { ProtoLogger } from "./logger";

/**
 * A logger class that extends ProtoLogger with simplified methods for logging
 * messages at different levels (log, warn, error) and cloning the logger instance.
 * @extends ProtoLogger
 */
export class Logger extends ProtoLogger {
	/**
	 * Logs a message with the "log" level.
	 * @param text - The message(s) to log. Multiple arguments are formatted using util.format.
	 * @example
	 * ```ts
	 * const logger = new Logger();
	 * logger.log("User connected:", "Alice"); // Logs: LOG        <timestamp> - User connected: Alice
	 * ```
	 */
	log(...text: any[]): void {
		this.write("log", ...text);
	}

	/**
	 * Logs a message with the "warn" level.
	 * @param text - The message(s) to log. Multiple arguments are formatted using util.format.
	 * @example
	 * ```ts
	 * const logger = new Logger();
	 * logger.warn("Low memory"); // Logs: WARN       <timestamp> - Low memory
	 * ```
	 */
	warn(...text: any[]): void {
		this.write("warn", ...text);
	}

	/**
	 * Logs a message with the "error" level to stderr.
	 * @param text - The message(s) to log. Multiple arguments are formatted using util.format.
	 * @example
	 * ```ts
	 * const logger = new Logger();
	 * logger.error("Failed to connect"); // Logs: ERROR      <timestamp> - Failed to connect
	 * ```
	 */
	error(...text: any[]): void {
		this.write("error", ...text);
	}

	/**
	 * Creates a new Logger instance with the same configuration as the current one.
	 * @returns A new Logger instance with copied prefix, enabled state, and log level.
	 * @example
	 * ```ts
	 * const logger = new Logger();
	 * logger.setPrefix("APP");
	 * const clonedLogger = logger.clone();
	 * clonedLogger.log("Test"); // Logs: LOG        <timestamp> - APP - Test
	 * ```
	 */
	clone(): Logger {
		const newLogger = new Logger();
		newLogger._prefix = this._prefix;
		newLogger._isEnabled = this._isEnabled;
		newLogger._currentLevel = this._currentLevel;
		return newLogger;
	}
}