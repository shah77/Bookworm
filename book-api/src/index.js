import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import auth from './routes/auth';
import users from './routes/users';
import book from './routes/book';
import dotenv from 'dotenv';
import Promise from 'bluebird';

const app = express();
dotenv.config();
app.use(bodyParser.json());

mongoose.Promise = Promise;

mongoose.connect(process.env.MONGODB_URL, { useMongoClient: true });

app.use("/api/auth", auth);
app.use("/api/users", users);
app.use("/api/book", book);

app.get('/*',(req, res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8080, ()=>console.log("running on localhost:8080"));