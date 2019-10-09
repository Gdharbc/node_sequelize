/*const env = {
  database: 'test',
  username: 'postgres',
  password: 'postgres',
  host: 'localhost',
  dialect: 'postgres',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
}; */

const env = {
  database: 'sequelizer_db',
  username: 'root',
  password: 'Root$123',
  host: 'localhost',
  dialect: 'mysql',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};

module.exports = env;