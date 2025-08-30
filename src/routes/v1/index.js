const express=require('express');
const routes=express.Router();
const test=require('../../controllers/testreq')
const usercontroller=require('../../controllers/userController')
const {validateAuth}=require('../../middlewares/index')

routes.get('/test',test.get);
routes.post('/signup',
    validateAuth.validateAuth,
    usercontroller.create);
routes.post('/signin',
    validateAuth.validateAuth,
    usercontroller.signin);


routes.get('/getbyid/:id',usercontroller.get);
routes.get('/getall',usercontroller.getall);
routes.delete('/delete/:id',usercontroller.deleteuser)

module.exports=routes;