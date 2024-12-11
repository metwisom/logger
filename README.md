# Logger

###### Example
```
import {Logger} from "@metwisom/logger";

const log = new Logger();

log.setPrefix("some Prefix");
log.log("Log line 1");
// "LOG        2024-12-10T10:20:45.242Z - some Prefix - Log line 1"

log.resetPrefix();
log.log("Log line 2");
// "LOG        2024-12-10T10:20:45.242Z - Log line 2"

log.disable();
log.log("Log line 3");
//-- OUTPUT NOTHING --

log.enable();
log.log("Log line 4");
// "LOG        2024-12-10T10:20:45.242Z - Log line 4"

log.error("Error line 5")
// "ERROR      2024-12-10T10:20:45.242Z - Error line 5"

log.warn("Warn line 6")
// "WARN       2024-12-10T10:20:45.242Z - Warn line 6"

log.write("custom","Custom line 7")
// "CUSTOM     2024-12-10T10:20:45.242Z - Custom line 7"




```
