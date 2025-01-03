import { Schema,model } from "mongoose";

const message = new Schema({
    email:String,
    fullname: String,
    message: String
})

const Message = model("Message",message);
export default Message;