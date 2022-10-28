import userModel from "../database/model.js";


const postfunction =  (request,response)=>{
   const data=request.body;
   const userdata=new userModel(data);
   userdata.save()
   response.send(data);
   console.log(data);

}
const getfunction=(req,res)=>{
   // res.send("hello world");
   const allusers=userModel.find((error,data)=>{
      if(error){
         return next(error)
      }else{
         res.json(data);
      }
   });
   
}

const Editfunction=async (req,res)=>{
   try{
      const newdata=req.body;
      const param=req.params;
      const update= await userModel.findByIdAndUpdate(param.id,newdata);
      console.log(newdata,update)
   }catch(err){
      console.log("error while updating data",err);
   }
 
}
const Getsingleuser=async(req,res)=>{
   try{
      const Data= await userModel.findById(req.params.id,'name email number');
      res.json(Data);
      console.log(Data);
      // console.log(Data);
   }catch(err){
      console.log("error while getting each  user",err);
   }
}
const Deleteuser= async (req,res)=>{
   try{
      const id=req.params.id;
      await userModel.findByIdAndDelete(id);
      console.log(req.params.id);
   }catch(err){
      console.log("error while deleting user",err);
   }
}

export {getfunction,postfunction,Editfunction,Getsingleuser,Deleteuser}
