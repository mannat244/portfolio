import { Schema,model } from "mongoose";

const resume = new Schema({
    url:String
})

const Resume = model("resume",resume);
export default Resume;