require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}` 
});

module.exports = {
  port: process.env.PORT || 80,
  db: {
    host: process.env.DB_HOST || "crossover.proxy.rlwy.net",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "cZMTrkdvLIIkOpSbbUPvpuQNqCTAmtpu",
    name: process.env.DB_NAME || "bar",
    port: process.env.DB_PORT || 16302,
  },
  secretKey: process.env.SECRET_KEY || "default_secret",
};

console.log("DBNAME:",process.env.DB_NAME);
console.log("DBHOST:",process.env.DB_HOST);
console.log("DBUSER:",process.env.DB_USER);
console.log("DBPORT:",process.env.DB_PORT);
console.log("NODE_ENV:",process.env.NODE_ENV);