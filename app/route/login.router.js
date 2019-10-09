module.exports = function(app) {
    const login = require('../controller/login.controller.js');
 
    // get User
    app.post('/api/login', login.getUser);
 
    }