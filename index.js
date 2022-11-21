import express from "express";
import cors from "cors"; 
// import { MongoClient } from "mongodb";
import 'dotenv/config'

import { posts } from "./mongoConnect.js"
import { addPost } from "./posts.js"

const app = express()
app.use(cors())
app.use(express.json())

// const client = new MongoClient(process.env.MONGO_URI)
// const database = client.db('blog')
// const posts = database.collection('posts')

// client.connect()
// console.log('connected to mongo')

// app.get('/', (req, res) => {
//     res.send('Hello Gerly Kaytukov')
// })


app.listen(process.env.PORT, () => console.log(`api running on port on ${process.env.PORT}...`))

// post - add one post item
// --- author, date, text 

// app.post('/', async (req, res) => {
    // const newPost = {author: 'Jon', date: '2022-21-11', text: 'lorem lorem here' }
    // console.log('req.body ->', req.body)


//     await posts.insertOne(req.body)
//     res.send('Item was added')

// })



// get - to all posts
app.get('/', async (req, res) => {
    const allPosts = await posts.find ().toArray()
    res.send(allPosts)
}) //to find everything 