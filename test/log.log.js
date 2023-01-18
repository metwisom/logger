const {Logger} = require("../dist/index");
const logger = new Logger()
logger.log("Test log 1", "Test log 2", {"test_obj":1});
