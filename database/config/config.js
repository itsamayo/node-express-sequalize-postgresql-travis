const env = require('./env');

module.exports = {
  development: {
    username: env.dev.username,
    password: env.dev.password,
    host: env.dev.host,
    database: env.dev.database,
    dialect: env.dev.dialect,
  },
  test: {
    username: env.test.username,
    password: env.test.password,
    host: env.test.host,
    database: env.test.database,
    dialect: env.test.dialect,
  },
  production: {
    username: env.live.username,
    password: env.live.password,
    host: env.live.host,
    database: env.live.database,
    dialect: env.live.dialect,
  },
}