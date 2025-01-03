import express from 'express'
import mongoose from 'mongoose';
import path from 'path' 
import Skill from './model/skill.js'; 
import Project from './model/project.js';
import Post from './model/post.js';
import Resume from './model/resume.js';
const app = express()
const port = 3001
import cors from "cors";
import Message from './model/message.js';
app.use(cors());
const rootpath = path.resolve(path.dirname(''),"")

app.use(express.json())
app.use(express.static(path.join(rootpath,"dist")))

mongoose.connect("mongodb+srv://mannattrivedi:nQRF3HhijORjRxtl@cluster0.ngtj6.mongodb.net/portfolio")
.then(console.log("conected to db!"))

app.post('/message',async(req,res)=>{
  const message = req.body;
  const messagedata = new Message(message)
  await messagedata.save()
  console.log(message)
  res.json(200)
})

app.get('/', async(req, res) => {
res.sendFile('dist/index.html',{root:rootpath})
}) 

app.get('/skills',async(req,res)=>{
    const data = await Skill.find();
    res.json(data)
})

app.get('/resume',async(req,res)=>{
  const data = await Resume.find();
  console.log(data)
  res.json(data)
})

app.get('/projects',async(req,res)=>{
  const data = await Project.find();
  res.json(data)
})

app.get('/posts',async(req,res)=>{
  const data = await Post.find();
  res.json(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 