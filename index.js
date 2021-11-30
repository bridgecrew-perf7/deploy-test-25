import Fastify from "fastify";

const fastify = Fastify({
  logger: {
    level: "debug",
  },
});

fastify.get("/hello", async (req, reply) => {
  return "Hello World! --> pm2 restart";
});

fastify.listen(3000, "0.0.0.0", (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.debug(`Server up and running at port 3000`);
});
