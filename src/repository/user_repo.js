const {user}=require('../models/index');
class userRepo{
    async  createuser(data){
        try{
             const users=await user.create(data);
             return users;

        }catch(error)
        {
            console.log("somthing wrong in the repo layer");
            throw{error};
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
}
module.exports=userRepo;