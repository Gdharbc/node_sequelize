const db = require('../config/db.config.js');
const Customer = db.customers;
const jwt = require('jsonwebtoken');

exports.getUser = (req, res) =>{
    const email = req.body.email;
    const password = req.body.password;

    Customer.findOne(
        {where: {email: email, password:password}}
    )
    .then(Customer =>{
        if(!Customer) 
        res.status(404).send({msg:'Not Found'})
        jwt.sign({Customer}, 'secretkey', (err, token) =>{
            res.send({token})
        })
     })
};
