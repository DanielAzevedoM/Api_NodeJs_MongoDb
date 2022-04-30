
import mongoose from 'mongoose';
import { Schema } from 'mongoose';
import Person  from '../person/person.entity';


const AdressModel = new  Schema({
  
  adress: String,

  city: String,

  state: String,

  postalCode: Number,

  country: String,
  
  personId: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Person',
    personId: Person,
  }

 
})

export default mongoose.model('Adress', AdressModel)
