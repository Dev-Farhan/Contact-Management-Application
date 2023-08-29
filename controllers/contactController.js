//@desc Get all contacts
//@route GET /api/ccontact
//@access public 
import asyncHandler from "express-async-handler";
// import  ContactSchema  from "../models/contactModel.js";

const getContacts = asyncHandler( async(req,res)=>{
    const contacts = await ContactSchema.find();
    res.status(200).json(contacts)
});

//@desc Update all contacts
//@route POST /api/ccontact
//@access public

const createContacts = asyncHandler(async(req,res)=>{
    console.log("The Request is ", req.body)
    const {name , email , phone} = req.body;
    if(!name || !email || !phone)
    {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const contact = await ContactSchema.create({
        name,
        email,
        phone,
    });
    res.status(200).json(contact)
});

//@desc Get  contact
//@route GET /api/ccontact
//@access public

const  getContact = asyncHandler(async(req,res)=>{
    const contact = await ContactSchema.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not Found");
    }
    res.status(200).json(contact)
});

//@desc Update contact
//@route PUT /api/ccontact/:id
//@access public

const  updateContact = asyncHandler(async(req,res)=>{
    const contact = await ContactSchema.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact NOt Found");
    }
    const updateContact = await ContactSchema.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    );
    res.status(200).json(updateContact)
});

//@desc Get all contact
//@route POST /api/ccontact/:id
//@access public

const  deleteContact = asyncHandler( async(req,res)=>{
    const contact = await ContactSchema.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact NOt Found");
    }
    await ContactSchema.deleteMany();
    res.status(200).json(contact);
});



export { 
         getContacts , 
         createContacts ,
         getContact , 
         updateContact , 
         deleteContact 
       };