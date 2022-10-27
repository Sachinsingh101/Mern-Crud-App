import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    number:{type:Number,required:true}
})

const userModel= mongoose.model('user',userSchema);

// const userDoc= new userModel({
//     name:'sonam',
//     email:'sachin.123'
// })
// userDoc.save();
export default userModel;