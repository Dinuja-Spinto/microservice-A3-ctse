const express = require('express');
const router = express.Router();
const Usercontroller = require('../controllers/user.controller');

module.exports = function(){
    router.post('/create', Usercontroller.createUser);
    router.get('/', Usercontroller.getAllUser);
    router.delete('/delete/:id',Usercontroller.deleteUser);
    router.put('/update/:id',Usercontroller.updateUser);
    router.get('/a/:id', Usercontroller.getAUser);
    return router;
}
