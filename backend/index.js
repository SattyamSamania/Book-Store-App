import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';

const app = express();


// Get Request 
app.get('/', (req, res)=> {
    res.send('MERN Stack Project')
})




mongoose.connect(mongoDBURL)
.then(() => {
    console.log('App Connected to Database');
    app.listen(PORT, ()=> {
        console.log(`Server is Running on PORT ${PORT}`);
    });
})
.catch((error)=> {
    console.log(error);
})