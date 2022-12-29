export type LoggerColor = "black" | "red" | "green" | "orange" | "blue" | "purple" | "cyan" | "white" | "reset";

type AvailableColor = {
	[key in LoggerColor]: string;
};

export const dimColorList: AvailableColor = {
	black: "\u001b[0;30m",
	red: "\u001b[0;31m",
	green: "\u001b[0;32m",
	orange: "\u001b[0;33m",
	blue: "\u001b[0;34m",
	purple: "\u001b[0;35m",
	cyan: "\u001b[0;36m",
	white: "\u001b[0;37m",
	reset: "\u001b[0;39m",
};

export const boldColorList: AvailableColor = {
	black: "\u001b[1;30m",
	red: "\u001b[1;31m",
	green: "\u001b[1;32m",
	orange: "\u001b[1;33m",
	blue: "\u001b[1;34m",
	purple: "\u001b[1;35m",
	cyan: "\u001b[1;36m",
	white: "\u001b[1;37m",
	reset: "\u001b[1;39m",
};