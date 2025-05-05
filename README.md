# Logger

```
PASS  test/stdout.test.js
logger behaviour
✓ test logger (49 ms)
✓ test prefix (37 ms)
✓ test clone (43 ms)
✓ test log (76 ms)
✓ test warn (42 ms)
✓ test error (36 ms)
```

###### Example
```js
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

const clone = log.clone()
clone.setPrefix('clone_prefix')
log.write("custom","Custom line 7")
clone.write("custom","Custom line 7")
// "CUSTOM     2024-12-10T10:20:45.242Z - Custom line 7"
// "CUSTOM     2024-12-10T10:20:45.242Z - clone_prefix - Custom line 7"

log.setLevel('warn')
log.log(1)
log.warn(2)
// "WARN       2025-05-05T17:41:00.324Z - 2"

```
