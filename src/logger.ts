type type = string;

class ProtoLogger {
	prefix = "";
	isEnabled = true;

	setPrefix (newPrefix: string) {
		this.prefix = newPrefix;
	}

	resetPrefix () {
		this.prefix = "";
	}

	enable () {
		this.isEnabled = true;
	}

	disable () {
		this.isEnabled = false;
	}

	write (type: type = "write", ...texts: any[]) {
		if (!this.isEnabled){
			return;
		}
		const typeOutput = type.toUpperCase() + new Array(12).join(" ").slice(type.length, 12);
		const date = new Date(new Date().getTime() - (new Date().getTimezoneOffset() * 60 * 1000)).toISOString();
		const localPrefix = this.prefix != "" ? this.prefix + " - " : "";
		const messageBody = `${typeOutput}${date} - ${localPrefix}${texts.map(item => typeof item == "object" ? JSON.stringify(item) : item).join(" ")}\r\n`;
		if (type === "error") {
			process.stderr.write(messageBody);
		} else {
			process.stdout.write(messageBody);
		}
	}
}


export { ProtoLogger };