
import mongoose from 'mongoose';
import { Schema } from 'mongoose';


const PersonModel = new Schema({
  
  
  name: String,

 
  gender: String,

 
  birthday: Date,


  selfie: String,

  
});

export default mongoose.model('Person', PersonModel)