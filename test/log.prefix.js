const {Logger} = require("../dist/index");
const logger = new Logger()
logger.setPrefix('some_prefix')
logger.write("write", "Test logger cyan");