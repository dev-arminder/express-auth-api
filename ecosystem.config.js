module.exports = {
    apps: [{
      name: "my-app",
      script: "dist/index.js",
      instances: "max",
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
        PORT: process.env.PORT || 3000
      }
    }]
  }