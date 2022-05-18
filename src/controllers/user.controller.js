const User = require('../models/user.model');

//Add new User
const createUser = async (req, res) => {
    if (req.body) {
        
        const user = new User(req.body);
        await user.save()
            .then(data => {
                res.status(200).send({ data: data });
            }).
            catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

//get all User
const getAllUser = async (req, res) => {
    await User.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

//Delete a User
const deleteUser = async (req, res) => {
    if (req.params && req.params.id) {
        await User.findByIdAndRemove(req.params.id)
            .then(response => {
                res.status(200).send({ data: response });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

//Update a User
const updateUser = async (req, res) => {
    if (req.params && req.params.id) {
        await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        })
            .then(response => {
                res.status(200).send({ data: response });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

//find a User
const getAUser = async(req,res) =>{
    if(req.params && req.params.id){
        await User.findById(req.params.id)
        .then(data =>{
            res.status(200).send({data:data});
        })
        .catch(error =>{
            res.status(500).send({error:error.message});
        });
    }
}

module.exports = {
    createUser,
    getAllUser,
    deleteUser,
    updateUser,
    getAUser
}