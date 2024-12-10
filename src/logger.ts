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
		const typeOutput = type.toUpperCase() + new Array(12).join(" ").slice(type.length, 12);
		const date = new Date(new Date().getTime() + (3 * 60 * 60 * 1000)).toISOString();
		const localPrefix = this.prefix != "" ? this.prefix + " - " : "";
		const messageBody = `${typeOutput}${date} - ${localPrefix}${texts.map(item => typeof item == "object" ? JSON.stringify(item) : item).join(" ")}\r\n`;
		//console.log('|'+texts.join(' ')+'|')
		if (type === "error") {
			if (this.isEnabled) process.stderr.write(messageBody);
		} else {
			if (this.isEnabled) process.stdout.write(messageBody);
		}
	}
}


export { ProtoLogger };