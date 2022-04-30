import 'reflect-metadata';  
import express from 'express';
import mongoose from 'mongoose';
import { adressRoutes } from './routes/adress.routes';
import { personRoutes } from './routes/person.routes';
import { userRoutes } from './routes/user.routes';


const app = express();

app.use(express.json());
app.use(userRoutes, personRoutes, adressRoutes)

mongoose.connect('mongodb://localhost/kunlatek')

app.listen(3000, () => {
    console.log("Server On")
})


