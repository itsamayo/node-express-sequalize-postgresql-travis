const env = {};

env.live = {
  database: 'live_db',
  username: 'postgres',
  password: 'postgres',
  host: '127.0.0.1',
  dialect: 'postgres'
};

env.dev = {
  database: 'dev_db',
  username: 'postgres',
  password: 'postgres',
  host: '127.0.0.1',
  dialect: 'postgres'
};

env.test = {
  database: 'test_db',
  username: 'postgres',
  password: 'postgres',
  host: '127.0.0.1',
  dialect: 'postgres'
};

module.exports = env;