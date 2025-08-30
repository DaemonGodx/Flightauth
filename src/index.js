const express=require('express');
const {PORT}=require('./config/envi');
const bodyParser = require('body-parser');
const routes=require('./routes/index');
const userServices=require('./services/user_services');
const userService=new userServices();
function startserver(){
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',routes);

    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`)
        // const newtoken=userService.createtoken({email:'a@gmail.com',id:'1'})
        // const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFAZ21haWwuY29tIiwiaWQiOiIxIiwiaWF0IjoxNzU2NTcxMTM2LCJleHAiOjE3NTY1NzExNjZ9.fDu-CNMSnfNF_m31xYPuAcwH5BsJ75oUJk_gg5j7Wa0' ;
        // const res=userService.verifytoken(token);
        // console.log(res);
        // console.log(newtoken)

});
}
startserver();