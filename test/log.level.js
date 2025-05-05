const {Logger} = require("../dist/index");
const logger = new Logger()
logger.setLevel('warn')

logger.log(1)
logger.warn(2)