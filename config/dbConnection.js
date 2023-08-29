import mongoose from "mongoose";

const connectdb = async()=>{
   try {
     const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Database connected : ",connect.connection.host,connect.connection.name);
   }catch(err){
      console.log(err);
      process.exit(1);
   }
};
// export const connectUserdb = async()=>{
//    try{
//         mongoose.connect("mongodb://127.0.0.1:27017/user_collections"); 
//         console.log(`Database Connected :`);
//    }catch(err){
//         console.log(err);
//         process.exit(1);
//    }
// }


export {connectdb};