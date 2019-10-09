module.exports = (sequelize, Sequelize) => {
	const Customer = sequelize.define('customer', {
	  firstname: {
			type: Sequelize.STRING
	  },
	  lastname: {
			type: Sequelize.STRING
	  },
	  age: {
		  type: Sequelize.INTEGER
		},
		email:{
			type: Sequelize.STRING
		},
		password:{
			type: Sequelize.STRING
		}
	});
	
	return Customer;
}	