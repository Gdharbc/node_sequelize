const db = require('../config/db.config.js');
const Order = db.orders;
const Customer = db.customers;

exports.create = (req, res) =>{
    Order.create({
        "name": req.body.name,
        "description": req.body.description
    }).then(order =>{
        res.send(order)
    }).catch(err=>{
        res.status(404).send({msg: 'Error', details: err})
    });
};

exports.findAll = (req, res) =>{
    Order.findAll()
    .then(orders =>{res.send(orders.sort((c1, c2) => {c1.id - c2.id}))})
    .catch(err =>{
        res.status(404).send({msg: "Error", details: err})
    })
};

exports.findById = (req, res) =>{
    const id = req.params.id;

    Order.findById(id)
        .then(order =>{res.send(order)})
        .catch(err=>{
            res.status(404).send({msg: "Error", details: err})
        })
}

exports.update = (req, res) =>{
    const id = req.body.id;

    Order.update(req.body, {where:{id:id}})
         .then(res.status(200).send("Updated Successfully."))
         .catch(err => {
             res.status(404).send({msg: 'Error', details:err})
         })
};

exports.delete = (req, res) =>{
    const id = req.params.id;

    Order.destroy({where:{id:id}})
         .then(res.status(200).send('Deleted Successfully!'))
         .catch(err =>{
             res.status(404).send({msg:'Error', details:err})
         })
};

exports.getTables = (req, res) =>{
	const id = req.params.id;

	Order.findById({
		where:{id: id},
		include:[{
            Customer,
            //required: true
		}]
	}).then(order =>{res.send(order)})
    .catch(err =>{
        res.status(404).send({msg: "Error", details: err})
    })
}