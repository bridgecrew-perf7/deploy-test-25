const Fastify = require("fastify");

const fastify = Fastify({
  logger: {
    level: "debug",
  },
});

fastify.get("/hello", async (req, reply) => {
  return { msg: "Hello World!", v: 2 };
});

const port = process.env.SERVER_PORT;
const host = process.env.SERVER_ADDRESS;

fastify.listen(port, host, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.debug(`Server up and running in ${process.env.NODE_ENV} mode`);
});
