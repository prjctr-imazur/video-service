const { createServer } = require("http");
const { URL } = require("url");

const AllVideosController = require("./controllers/AllVideosController");
const AddVideoController = require("./controllers/AddVideoController");

const hostname = "127.0.0.1";
const port = 3000;

const server = createServer(async (req, res) => {
  const { pathname } = new URL(req.url, `http://${hostname}:${port}`);

  if (req.method === "GET" && pathname === "/") {
    return new AllVideosController().handle(req, res);
  }
  if (req.method === "POST" && pathname === "/upload") {
    return new AddVideoController().handle(req, res);
  }

  res.statusCode = 404;
  res.end("Not found");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
