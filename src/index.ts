import { ProtoLogger } from "./logger";


class Logger extends ProtoLogger {
	log (...text: any[]) {
		this.write("log", ...text);
	}

	warn (...text: any[]) {
		this.write("warn", ...text);
	}

	error (...text: any[]) {
		this.write("error", ...text);
	}

	clone():ProtoLogger{
		return Object.assign(new Logger(),structuredClone(this));
	}
}


export { Logger };