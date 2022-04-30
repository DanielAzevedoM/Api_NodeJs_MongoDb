import Adress  from '../../models/adress/adress.entity';
import Person from '../../models/person/person.entity';
import { Adress as AdressI } from '../../interfaces/adress/adress.interface';
import { UpdateAdress } from '../../interfaces/adress/adress.update.interface';

export class AdressService {
    async create(params, adress: AdressI){
        const findPerson = await Person.findById({ _id: params.personId })
       
		if(!findPerson) return null;

        const result = new Adress(adress);

        return result.save();
    }
    
    async updateFk(params, adress: AdressI) {   
        console.log(adress)

        const findPerson = await Person.findById({ _id: params.personId }); 

        const findAdress = await Adress.findById({ _id: adress._id });
        
        console.log(findAdress)

        if(!findPerson) return null;
        if(!findAdress) return null;

        return  await Adress.findByIdAndUpdate({ _id: findAdress._id }, 
            { personId: findPerson._id }, 
            { new: true });
    }

    async findAll(params){
        const findPerson = await Person.findById({ _id: params.personId})

        const findAdress = await Adress.find({ personId: findPerson._id })
  
		if(!findPerson) return null;

        return findAdress;
    }

    async findOne(params){
        const findPerson = await Person.findById({ _id: params.personId});

        const findAdress = await Adress.findOne({ _id: params.id });

		if(!findPerson) return null;
        if(!findAdress) return null;

        return findAdress;
    }

    async update(params, adress: UpdateAdress){
        const findPerson = await Person.findById({ _id: params.personId});
 
         const findAdress = await Adress.findOne({ _id: params.id });
      
         if(!findPerson) return null;
         if(!findAdress) return null;
         
         return  await  Adress.findByIdAndUpdate({ _id: findAdress._id }, 
             {   
                 adress: adress.newAdress,
                 city: adress.newCity,
                 state: adress.newState,
                 postalCode: adress.newPostalCode,
                 country: adress.newCountry    
             }, 
             { new: true });
         
     }

     async remove(params){
        const findPerson = await Person.findById({ _id: params.personId});

        const findAdress = await Adress.findById({ _id: params.id});

		if(!findPerson) return null;
        if(!findAdress) return null;
       
        return Adress.remove({_id: findAdress._id}).exec();
    }
    
}