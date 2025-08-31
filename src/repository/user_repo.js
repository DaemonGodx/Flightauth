const {user,roles}=require('../models/index');
const ValidationError = require('../utils/validation-error');

class userRepo{
    async  createuser(data){
        try{
             const users=await user.create(data);
             return users;

        }catch(error)
       {
            if(error.name == 'SequelizeValidationError') {
                throw new ValidationError(error);
            }
            console.log("Something went wrong on repository layer");
            throw error;
        }

    }
    async getuser(id){
        try{
            const getuser=await user.findByPk(id,{
                attributes:['email','id']
            });
        return getuser;
    }catch(error)
    {
           console.log("somthing wrong in the repo layer");
            throw{error};
    }
}
 async getall(){
        try{
            const getuser=await user.findAll();
        return getuser;
    }catch(error)
    {
           console.log("somthing wrong in the repo layer");
            throw{error};
    }
}
async deleteuser(id){
     try{
            const deleteuser=await user.destroy({
                where:{
                    id:id
                }
            });
        return deleteuser;
    }catch(error)
    {
           console.log("somthing wrong in the repo layer");
            throw{error};
    }

}
async getByMail(email){
    try {
        const find=await user.findOne({
            where:{
                email:email
            }
        });
        return find;

    } catch (error) {
        console.log("somthing wrong in the repo layer");
        throw{error};
        
        
    }
}
async isAdmin(id){
    try {
        const u1=await user.findByPk(id);
        const r1=await roles.findByPk(1);
        const res=await u1.hasRoles(r1);
        return res;
}
    catch (error) {
        console.log("somthing wrong in the repo layer");
        throw{error};
    }
}
}
module.exports=userRepo;