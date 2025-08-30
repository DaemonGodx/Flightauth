const express=require('express')
const routes=express.Router();
const v1api=require('./v1/index')
routes.use('/v1',v1api);
module.exports=routes;