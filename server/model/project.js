import { Schema,model } from "mongoose";

const project = new Schema({
    id: Number,
    name: String,
    image: String,
    desc: String,
    url: String,
    featured:Boolean
})

const Project = model("Myproject",project);
export default Project;