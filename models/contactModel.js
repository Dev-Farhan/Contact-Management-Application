import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    name : {
        type : String,
        required : [true,"Please add the name"],
    },
    email : {
        type : String,
        required : [true,"Please add the email"],
    },
    phone : {
        type : String,
        required : [true,"Please add the phone"],
        maxlength:10,
        minlength:10,
    },
},
{
    timestamps : true,
}
);

const ContactSchema = mongoose.model("Contact",contactSchema);
// export default ContactSchema;