module.exports = function(app) {
    const orders = require('../controller/order.controller.js');
 
    // Create a new Customer
    app.post('/api/orders', orders.create);
 
    // Retrieve all Customer
    app.get('/api/orders', orders.findAll);
 
    // Retrieve a single Customer by Id
    app.get('/api/orders/:id', orders.findById);
 
    // Update a Customer with Id
    app.put('/api/orders', orders.update);
 
    // Delete a Customer with Id
    app.delete('/api/orders/:id', orders.delete);

    app.get('/api/getTables/:id', orders.findById);
}