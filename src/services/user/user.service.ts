
import  User from '../../models/user/user.entity';
import { User as UserI } from '../../interfaces/user/user.interface';
import { UpdateUser } from '../../interfaces/user/user.update.interface'



export class UserService { 

    async create(user: UserI){ 
        const checkUserExists = await User.findOne({email: user.email})

        if(checkUserExists) return new Error("Email already exits!")

        const result = await new User(user).save();

        return result;
    }
    
   async findAll() {  
       return User.find()
    }

    async findOne(id: string){
        const findUser = await User.findById({_id: id});
        
        if(!findUser) return null;

        return findUser;
    }

    async update(id: string, user:  UpdateUser){
        const findUser = await User.findById({_id: id});
        
        const checkUserExists = await User.findOne({email: user.newEmail})

        if(checkUserExists) return new Error("Email already exits!")
    
        if(!findUser) return null;
       
        return User.findByIdAndUpdate({ _id: id }, 
            { email: user.newEmail, password: user.newPassword }, 
            { new: true });
    }


    async remove(id: string){
        const findUser = await User.findById({_id: id});

        if(!findUser) return null;
    
        return User.findByIdAndUpdate({ _id: id }, 
            { isDeleted: true }, 
            { new: true });
    }


    async findOneGuard(email: string){
 
        const findUser = await User.findOne({email});

        return findUser;
    }
}