import mongoose from "mongoose";
import Env from "./envConfig.js";

async function connectDb(){
    await mongoose.connect(Env.dbUrl).then(()=>{
        console.log("Database connected....");
        console.log(`DB host:${mongoose.connection.host}`)
    }).catch((err:Error)=>{
        console.log(`Error at Database Connection:${err?.message}`);
    })
}

export default connectDb;