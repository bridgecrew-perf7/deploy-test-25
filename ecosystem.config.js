module.exports = {
  apps: [
    {
      name: "deploy-test",
      cwd: "/opt/deploy-test/deploy-test/deploy-test/deploy-test",
      script: "index.js",
      node_args: "-r dotenv/config",
      env: {
        NODE_ENV: "production",
      },
      exp_backoff_restart_delay: 100,
      max_memory_restart: "500M",
      max_restarts: 10,
    },
  ],
};
