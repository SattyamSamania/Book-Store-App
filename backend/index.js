import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';

const app = express();



// Middleware for parsing request body 
app.use(express.json());


// Get Request 
app.get('/', (req, res)=> {
    res.send('MERN Stack Project')
})


// Route for Save a new Book
app.post('/books', async (req, res) => {
    try {
      if (
        !req.body.title ||
        !req.body.author ||
        !req.body.publishYear
      ) {
        return res.status(400).send({
          message: 'Send all required fields: title, author, publishYear',
        });
      }
      const newBook = {
        title: req.body.title,
        author: req.body.author,
        publishYear: req.body.publishYear,
      };
  
      const book = await Book.create(newBook);
  
      return res.status(201).send(book);
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });
  

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