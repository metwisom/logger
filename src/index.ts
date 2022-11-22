import { write } from "./write";


export { write };

export function log (text: string) {
	write(text, "white", "log");
}

export function warn (text: string) {
	write(text, "orange", "warn");
}

export function error (text: string) {
	write(text, "red", "error");
}