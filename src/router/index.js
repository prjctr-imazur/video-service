const { URL } = require("url");

module.exports = function router({ hostname, port }) {
  const routes = { GET: {}, POST: {} };

  let defaults = (_, res) => {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Not found");
  };

  function get(path, handler) {
    routes["GET"][path] = handler;
  }

  function post(path, handler) {
    routes["POST"][path] = handler;
  }

  function fallback(handler) {
    defaults = handler;
  }

  function handle(req, res) {
    const { pathname, searchParams } = new URL(
      req.url,
      `http://${hostname}:${port}`
    );

    const match = routes[req.method] && routes[req.method][pathname];

    match ? match(req, res, { query: searchParams }) : defaults(req, res);
  }

  return { get, post, fallback, handle };
};
