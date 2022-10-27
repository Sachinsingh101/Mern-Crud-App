import cors from 'cors'
import express from "express";
import bodyParser  from 'body-parser';
import dotenv from 'dotenv'
dotenv.config();
import router from './routes/userroute.js'
import connection from './database/connectDB.js';
import './database/model.js';
const app=express();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
const port=process.env.PORT || '4000'
const DATABASE_URL=process.env.DATABASE_URL


app.get('/',(req,res)=>{
    res.send("Hello world from express");
})

app.use('/',router);
connection(DATABASE_URL)
app.listen(port,()=>{
    console.log("listening to 3000 port");
})