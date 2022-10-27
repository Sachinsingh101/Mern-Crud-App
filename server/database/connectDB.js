import mongoose from 'mongoose'

const connection = async(DATABASE_URL)=>{
    try{
        const Db_optiion={
            Dbname:"Sachimaa"
        }
        await mongoose.connect(DATABASE_URL,Db_optiion);
        console.log("Database connected successfully");
    } catch(err){
        console.log("error while connecting to Database ",err);
    }
}

export default connection;