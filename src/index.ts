import { resetPrefix, setPrefix, write } from "./write";


const log = (text: string) => {
	write(text, "white", "log");
};

const warn = (text: string) => {
	write(text, "orange", "warn");
};

const error = (text: string) => {
	write(text, "red", "error");
};

export const Logger = { setPrefix, resetPrefix, write, log, warn, error };