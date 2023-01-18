const {Logger} = require("../dist/index");
const logger = new Logger()
logger.write("cyan", "write", "Test logger cyan");
