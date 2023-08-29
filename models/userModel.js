import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    
    name:{
        type : String , 
        required : [true,"Name is Required"],
        trim : true , 
    },
    email:{
        type : String , 
        required : [true,"Email is Required"],
        unique : [true,"Already Exists"],
        trim : true , 
    },
    password:{
        type : String , 
        required : [true,"Password is Required"],
        trim : true , 
    },
    mobile:{
        type : Number , 
        required : [true,"Mobile is Required"],
        trim : true , 
        maxlength :  10 ,
        minlength :  10 ,
    },
    address:{
        type : String , 
        required : [true,"Address is Required"],
        trim : true , 
    },
},
   {
    timestamps : true,
   }   
);

export const UserSchema = mongoose.model("new_collections",userSchema);
