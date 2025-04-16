const {Logger} = require("../dist/index");
const logger = new Logger()
logger.setPrefix('some_prefix')
const clone = logger.clone()
clone.setPrefix('clone_prefix')
logger.write("write", "Test logger cyan");
clone.write("write", "Test logger cyan");