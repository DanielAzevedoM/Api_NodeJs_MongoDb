import 	Person from '../../models/person/person.entity'; 
import { Person as PersonI } from '../../interfaces/person/person.interface';
import 	User from '../../models/user/user.entity';
import { UpdatePerson } from '../../interfaces/person/person.update.interface';


export class PersonService {
  	async create(param, person: PersonI){
        const findUser = await User.findById({ _id: param.userId});

        if(!findUser) return new Error("User not Exists")

		return new Person(person).save()
    }  

    async updateFk(id: string, person: PersonI){
		const findUser = await User.findById({ _id: id});
		

		if(!findUser) return null;

		return User.findByIdAndUpdate({ _id: findUser._id }, 
            { personId: person._id}, 
            { new: true })
    }

    async remove(params){
       
		const findUser = await User.findById({ _id: params.userId});
	
		if(!findUser) return null;
	
		if(findUser.personId !== null){

			const findPerson = await Person.findById({ _id: findUser.personId});

			await User.findByIdAndUpdate({ _id: findUser.id }, 
				{ personId: null }, 
				{ new: true });

		
			return  Person.remove({findPerson}).exec()
		}	

		return null;
	}
	

	async findOne(params){
		const findUser = await User.findById({ _id: params.userId});

		const findPerson = await Person.findOne({ _id: findUser.personId });

		if(!findUser) return null;
		if(!findPerson) return null;
	
		return findPerson;
	}

	async update(params, person: UpdatePerson){
		const findUser = await User.findById({ _id: params.userId});

		const findPerson = await Person.findOne({ _id: findUser.personId });

		if(!findUser) return null;
		if(!findPerson) return null;
	
        
		return  Person.findByIdAndUpdate({ _id: findPerson._id }, 
			{ 	name: person.newName,
				gender: person.newGender,
				birthday: person.newBirthday
			}, 
			{ new: true });
    }

	async updateSelfie(params, selfie: string){
		const findUser = await User.findById({ _id: params.userId});

		const findPerson = await Person.findOne({ _id: findUser.personId });

		if(!findUser) return null;
		if(!findPerson) return null;

		return  Person.findByIdAndUpdate({ _id: findPerson._id }, 
			{ 	
				selfie: selfie
			}, 
			{ new: true });

	}
	
}
