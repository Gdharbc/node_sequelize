module.exports = (sequelize, Sequelize) => {
	const Order = sequelize.define('order', {
	  name: {
			type: Sequelize.STRING
	  },
	  description: {
			type: Sequelize.STRING
	  }
	});
	
	return Order;
}