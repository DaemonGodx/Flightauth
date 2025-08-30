const env=require('dotenv')
env.config();
const bcrypt=require('bcrypt');
module.exports={
    PORT:process.env.port,
    SALT:bcrypt.genSaltSync(10),
    JWT_KEY:process.env.JWT_KEY,
}