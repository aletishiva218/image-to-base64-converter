import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import uploadImg from "./route/uploadImage.js";

dotenv.config()
const port = process.env.PORT;

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post('/image',express.raw({ type: 'image/*', limit: '10mb' }),uploadImg)

app.listen(port,()=>console.log("Server is started at port",port))