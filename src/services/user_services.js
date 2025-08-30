const jwt  = require('jsonwebtoken');
const userRepo=require('../repository/user_repo');
const {JWT_KEY}=require('../config/envi');
const bcrypt=require('bcrypt')
class userServices{
    constructor()
    {
        this.userRepo = new userRepo();
    }
    async createuser(data)
    {
        try{
            const user=await this.userRepo.createuser(data);
            return user;
        }
        catch(error){
            console.log("somthing wrong in service layer");
            throw{error};
        }
    }
    async signin({email,password})
    {
    try{
        const user=await this.userRepo.getByMail(email);
        const passwordmatch=this.checkpassword(password,user.password);
        if(!passwordmatch)
        {
            console.log("Password dosent match");
            throw{error:"incorrect assword"};
            
        }
        const newJWT=this.createtoken({email:user.email,id:user.id});
        return newJWT;

    }catch(error)
    {
        console.log("somthing wrong in service layer");
        throw{error};

    }
}
        
    async get(id)
    {
        try{
            const user=await this.userRepo.getuser(id);
            return user;
        }
        catch(error){
            console.log("somthing wrong in service layer");
            throw{error};
        }
    }
     async getall()
    {
        try{
            const user=await this.userRepo.getall();
            return user;
        }
        catch(error){
            console.log("somthing wrong in service layer");
            throw{error};
        }
    }
     async deleteuser(id)
    {
        try{
            const user=await this.userRepo.deleteuser(id);
            return true;
        }
        catch(error){
            console.log("somthing wrong in service layer");
            throw{error};
        }
    }
createtoken(user){
        try{
            const result=jwt.sign(user,JWT_KEY,{expiresIn:'1d'});
            return result;

        }catch(error)
        {
            console.log("somthing went wrong");
            throw{error};
        }
 

    }
    

verifytoken(token){
        try{
            const result=jwt.verify(token,JWT_KEY);
            return result;

        }catch(error)
        {
            console.log("somthing went wrong",error);
            throw{error};
        }


    }
    checkpassword(userInputPlainPassword,encryptedPassword){
        try {
            const response=bcrypt.compareSync(userInputPlainPassword,encryptedPassword);
            return response; 

            
        } catch (error) {
            console.log("somthing went wrong in password comaprison");
            throw error;
            
        }
    }
      
}
module.exports=userServices;