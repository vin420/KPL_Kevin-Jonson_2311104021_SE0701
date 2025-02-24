import os from "os";

console.info("Platform: " + os.platform());
console.info("Architecture: " + os.arch());
console.info("CPU Info: " + os.cpus());
console.info("Uptime: " + os.uptime());
console.info("Total Time: " + os.totalmem());
console.info("Free Memory: " + os.freemem());
console.table(os.networkInterfaces());
