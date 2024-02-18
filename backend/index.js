import express, { response } from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import bookRoute from './routes/bookRoute.js'
import cors from 'cors';

const app = express();



// Middleware for parsing request body 
app.use(express.json());


// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );


// Get Request 
app.get('/', (req, res)=> {
    res.send('MERN Stack Project')
})

app.use('/books', bookRoute)


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