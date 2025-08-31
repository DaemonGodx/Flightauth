const userServices=require('../services/user_services');
const userService=new userServices();
const create= async (req ,res)=>{
    try{
         const user=await userService.createuser({
        email:req.body.email,
        password:req.body.password
    })
    return res.status(201).json({
        message:"created successfully",
        success:true,
        error:{},
        data:user


    })

    }
    catch(error)
    {
        return res.status(500).json({
        data:{},
        message:"creation failed",
        success:false,
        error:error,

    })
   
}
}
const signin= async (req ,res)=>{
    try{
         const user=await userService.signin({
        email:req.body.email,
        password:req.body.password
    })
    return res.status(200).json({
        message:"signed in successfully",
        success:true,
        error:{},
        data:user


    })
}catch(error){
    return res.status(500).json({

        data:{},
        message:"signin failed",
        success:false,
        error:error

    })
}
}
const get=async (req,res) =>
{
    try{
         const user=await userService.get(req.params.id);
    return res.status(200).json({
        message:"fetched successfully",
        success:true,
        data:user,
        error:{}


    })

    }
    catch(error)
    {
        return res.status(500).json({
        data:{},
        message:"fetching failed",
        success:false,
        error:error

    })
   
}
}
const getall=async (req,res) =>
{
    try{
         const user=await userService.getall();
    return res.status(200).json({
        message:"fetched successfully",
        success:true,
        data:user,
        error:{}


    })

    }
    catch(error)
    {
        return res.status(500).json({
        data:{},
        message:"fetching failed",
        success:false,
        error:error

    })
   
}
}
const deleteuser=async (req,res) =>
{
    try{
         const user=await userService.deleteuser(req.params.id);
    return res.status(200).json({
        message:"deleted successfully",
        success:true,
        data:user,
        error:{}


    })

    }
    catch(error)
    {
        return res.status(500).json({
        data:{},
        message:"deletion failed",
        success:false,
        error:error

    })
   
}
}
const isauthenticated=async (req,res)=>
{
    try{
            const user=await userService.isauthenticated(req.headers['x-access-token']);    
            return res.status(200).json({
                message:"user is authenticated",
                success:true,
                data:user,
                error:{}
            })
    }catch(error)
    {
         return res.status(500).json({
        data:{},
        message:"invalid token",
        success:false,
        error:error
    })
    }
}
const isAdmin=async (req,res,next)=>
{
    try {
        const response=await userService.isAdmin(req.body.id);
        return res.status(200).json({
            message:"user is admin",
            success:true,   
            data:response,
            error:{}
        })
    }
    catch (error) {
            return res.status(500).json({
            data:{},
            message:"user is not admin",
            success:false,
            error:error
        })
}
}
module.exports={
    create,
    get,
    getall,
    deleteuser,
    signin,
    isauthenticated,
    isAdmin
}

