import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://afrasrahim1708:17082004sulu@cluster0.4izyt.mongodb.net/tomato').then(()=>console.log("DB Connected"));
   
}


