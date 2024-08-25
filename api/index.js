import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from'./routes/user.route.js';
import authRoutes from'./routes/auth.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

import UploadFile from './routes/uploadFile.js';
import DownloadFile from './routes/downloadFile.js';
import ShowFile from './routes/showFile.js';
import fileRouter from './routes/fileRouter.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


dotenv.config();
mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log('mongodb is connected');
})
.catch((err)=>{
    console.log(err);
})
const app=express();
import cors from 'cors';


app.use(express.static('public'));


app.set("views",path.join(__dirname,"/views"));
app.set('view engine' , 'ejs');

app.use(cors())

app.use(express.json());
app.use(cookieParser());
app.listen(3000,()=>{
    console.log('Server is running on port 3000 ');
});

app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);

app.use('/api/files',UploadFile);
//app.use('/api/file/:uuid', ShowFile);
app.use('/file/download',DownloadFile);
app.use('/api/file', fileRouter);

app.get ("/" ,async(req,res)=>{
    res.send("success");
})


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
});