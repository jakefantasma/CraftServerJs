const { exec, spawn } = require("child_process");
//web service
const web_service = spawn("npm.cmd", [`start`]);
web_service.stdout.on("data", (data) => {
  console.log(`server web: ${data}`);
});
