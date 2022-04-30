import { Request, Response } from 'express';
import User from '../../models/user/user.entity';
import jwt from 'jsonwebtoken';


export class AuthController {
    async authenticate(req: Request, res: Response){
       
        const { email, password} = req.body;

        const user = await User.findOne({ email: email, password: password});

        if(!user){
            return res.sendStatus(401)
        }

        const token = jwt.sign({ id: user.id }, 'secret', {expiresIn: '7d'})

        delete user.password;

        return res.json({ user, token})
    }
}
