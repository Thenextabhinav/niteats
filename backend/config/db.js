import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";

export const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URI)
    .then(()=>console.log("database connected Successfully"))
    .catch((error)=>{
        console.log(error);
    })
};

