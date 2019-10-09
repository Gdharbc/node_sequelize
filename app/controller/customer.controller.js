const db = require('../config/db.config.js');
const Customer = db.customers;
const Order = db.orders;
//const verifyToken = require('../middleware/jwt_tocken');
const jwt = require('jsonwebtoken');

exports.create = (req, res) =>{
	//debugger
	jwt.verify(req.token,'secretkey', (err, authData) => {
		if(err){
			res.sendStatus(403)
			authData
			
		}else{
	Customer.create({
		"firstname": req.body.firstname,
		"lastname": req.body.lastname,
		"age":req.body.age,
		"email":req.body.email,
		"password":req.body.password
	}).then(customer =>{
		res.send(customer)
		
	}).catch(err => {
		res.status(404).send({msg: err, details: err})
	});
}
});
};

exports.findAll = (req, res) =>{
	Customer.findAll()
	.then(customers => {
		res.send(customers.sort( (c1, c2)=> {c1.id - c2.id}))})
	.catch(err => {
		res.status(404).send({msg: "Error", details:err})
	});
};

exports.findById = (req, res) => {
	const id = req.params.id;

	Customer.findById(id)
	.then(customer => {
		res.send(customer)
	})
	.catch(err =>{
		res.status(404).send({msg: 'Error', details: err})
	});
};

exports.update = (req, res) => {
	const id = req.body.id;

	Customer.update(req.body, {where: {id:id}})
	.then(
		res.status(200).send({msg: 'Success'})
	).catch(err => {
		res.status(404).send({msg: 'Error', details: err})
	});
};

exports.delete = (req,res) => {
	const id = req.params.id;

	Customer.destroy({where: {id:id}})
	.then(
		res.status(200).send({msg: "Deleted"})
	)
	.catch(err => {
		res.status(404).send({msg:'Error', details:err})
	});
};

// exports.getTables = (req, res) =>{
// 	const id = req.params.id;

// 	Customer.findById({
// 		where:{id: id},
// 		include:[{
//             model: Order,
//             required: true
// 		}]
// 	}).then(customers =>{res.send(customers)})
//     .catch(err =>{
//         res.status(404).send({msg: "Error", details: err})
//     })
// }

/*function verifyToken(req, res, next){
	
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
		next();
		debugger
    }else{
        res.sendStatus(403)
    }
}*/
