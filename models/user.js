const mongoose=require('mongoose');

const UserModel=new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    isPaid:Boolean,
    nextPaymentDate:Date,
});
export const register = mongoose.model('user', userSchema, "register");
module.exports=mongoose.model('User',UserModel);