import { boldColorList, dimColorList } from "./color";


type color = keyof typeof dimColorList & keyof typeof dimColorList;
type type = "write" | "log" | "warn" | "error";

let prefix = "";

export function setPrefix (newPrefix: string) {
	prefix = newPrefix;
}

export function resetPrefix () {
	prefix = "";
}

export function write (text: string, color: color, type: type = "write") {
	const typeOutput = type.toUpperCase() + new Array(7).join(" ").slice(type.length, 10);
	const date = new Date().toISOString();
	const localPrefix = prefix != "" ? prefix + " - " : "";
	const messageBody = (boldColorList[color] || boldColorList.reset) +
		`${typeOutput}` +
		boldColorList.reset +
		(dimColorList[color] || dimColorList.reset) +
		`${date} - ${localPrefix}${text}\r\n` +
		dimColorList.reset;
	if (type === "error") {
		process.stderr.write(messageBody);
	} else {
		process.stdout.write(messageBody);
	}
}