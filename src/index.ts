import { resetPrefix, setPrefix, write, enable, disable } from "./write";


const log = (text: string) => {
	write(text, "white", "log");
};

const warn = (text: string) => {
	write(text, "orange", "warn");
};

const error = (text: string) => {
	write(text, "red", "error");
};

export const Logger = { enable, disable, setPrefix, resetPrefix, write, log, warn, error };