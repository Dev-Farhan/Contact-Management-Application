import asyncHandler from "express-async-handler"
import { UserSchema } from "../models/userModel.js"

 export const registerUser = asyncHandler(async(req,res)=>{
    const {name , email , password , mobile , address} = req.body ;
    // console.log("The Request is ", req.body)
    if(!name || !email || !password || !mobile || !address){
         res.status(400);
        throw new Error("All Fields are mandatory");
    }
    let user = await UserSchema.create({name, email,password,mobile,address,});
    console.log(user)
     res.status(200).json(user);

});

export const loginUser = asyncHandler(async(req,res)=>{
      const {email , password} = req.body ;
      if(!email || !password) {
        res.status(400);
        throw new Error ("All fields are mandatory");
      }
        const user = await UserSchema.findOne({email});
        if (user)
        res.status(200).json(user);
      
})