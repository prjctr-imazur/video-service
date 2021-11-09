const { createServer } = require("http");

const createRouter = require("./router");
const AllVideosController = require("./controllers/AllVideosController");
const AddVideoController = require("./controllers/AddVideoController");
const RequestValidatorError = require("./errors/RequestValidatorError");

const hostname = "127.0.0.1";
const port = 3000;

const router = createRouter({ hostname, port });

router.get("/", async (_, res) => {
  try {
    const controller = new AllVideosController();
    const result = await controller.handle();
    res.statusCode = 200;
    res.end(result);
  } catch (err) {
    res.statusCode = 500;
    res.end(err.message);
  }
});

router.post("/upload", async (req, res) => {
  try {
    const controller = new AddVideoController();
    const result = await controller.handle(req);
    res.statusCode = 201;
    res.end(result);
  } catch (err) {
    if (err instanceof RequestValidatorError) {
      res.statusCode = 415;
      res.end(err.message);
    } else {
      res.statusCode = 500;
      res.end(err.message);
    }
  }
});

router.fallback((req, res) => {
  res.statusCode = 404;

  res.end("Not found");
});

const server = createServer(router.handle);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
