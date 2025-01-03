import { Schema,model } from "mongoose";

const skill = new Schema({
    title: String,
    items: [{
        id:Number,
        text:String,
        icon:[]
    }],
})

const Skill = model("MySkill",skill);
export default Skill;