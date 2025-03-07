const http = require("http");
const server = http.createServer((req, res) => {
  res.write("hi, welcome");
  res.end();
});
server.listen(3000);