const verifyToken = require('../middleware/jwt_tocken');

module.exports = function(app) {
    const customers = require('../controller/customer.controller.js');
 
    // Create a new Customer
    app.post('/api/customers',verifyToken, customers.create);
 
    // Retrieve all Customer
    app.get('/api/customers', customers.findAll);
 
    // Retrieve a single Customer by Id
    app.get('/api/customers/:id', customers.findById);
 
    // Update a Customer with Id
    app.put('/api/customers', customers.update);
 
    // Delete a Customer with Id
    app.delete('/api/customers/:id', customers.delete);

    //app.get('/api/getTables/:id', customers.findById);
   
}


// function verifyToken(req, res, next){
	
//     const bearerHeader = req.headers['authorization'];
//     if(typeof bearerHeader !== 'undefined'){
//         const bearer = bearerHeader.split(' ');
//         const bearerToken = bearer[1];
//         req.token = bearerToken;
// 		next();
// 		debugger
//     }else{
//         res.sendStatus(403)
//     }
// }
