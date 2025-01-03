import { Schema,model } from "mongoose";

const post = new Schema({
    id: Number,
    name: String,
    image: String,
    desc: String,
    url: String,
    featured:Boolean
})

const Post = model("Post",post);
export default Post;