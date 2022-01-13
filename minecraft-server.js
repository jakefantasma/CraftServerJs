const { exec, spawn } = require("child_process");
const memoria = 1204;
const child = spawn("java", [
  `-Xmx${memoria}M`,
  `-Xms${memoria}M`,
  "-jar",
  "server.jar",
]);

//api
const handler_server = spawn("node", [`handler-server.js`]);
handler_server.stdout.on("data", (data) => {
  const command = JSON.parse(`${data}`);
  const cmd_mc = command.cmd + " " + command.param;
  runCommand(cmd_mc);
});
/**
//web service
const web_service = spawn("npm.cmd", [
  `--prefix`,
  `server_craf_manager`,
  `run`,
  `start`
]);
web_service.stdout.on("data", (data) => {
  console.log(`server web`);
  console.log(`server web: ${data}`);
});
 */

//handler server
function runCommand(cmd) {
  child.stdin.write(cmd + "\n");
}
child.stdout.on("data", (data) => {
  if (data.includes("supersaya")) {
    // supersaya("jake");
  }
  console.log(`${data}\n`);
});
child.stderr.on("data", (data) => {
  console.error(`stderr: ${data}`);
});
child.on("error", (error) => {
  console.error(`error: ${error.message}`);
});
child.on("close", (code) => {
  console.log(`child process exited with code ${code}`);
});
//function handler like a pipe :v
async function outHandler(data) {
  console.log(JSON.stringify(data));
  //console.log(data);
}
