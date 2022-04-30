import { Schema } from 'mongoose';
import mongoose from 'mongoose';
import Person  from '../person/person.entity';

const UserModel = new Schema({

  email: String,
  
  password: String,

  personId: {
   type: mongoose.Schema.Types.ObjectId, ref: 'Person',
   personId: Person,
   default: null
  }, 
    
  isDeleted: { 
    type: Boolean,
    default: false
  }

})

export default mongoose.model('User', UserModel)