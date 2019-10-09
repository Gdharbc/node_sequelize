const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
//db.login = require('../model/login.model.js')(sequelize, Sequelize);
db.customers = require('../model/customer.model.js')(sequelize, Sequelize);
db.orders = require('../model/order.model.js')(sequelize, Sequelize);

//Relations
db.customers.hasMany(db.orders);
db.orders.belongsTo(db.customers);

module.exports = db;