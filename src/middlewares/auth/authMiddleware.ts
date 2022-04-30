import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';


interface tokenPayLoad {
    id: string,
    iat: number,
    exp: number
}

export default function AuthMiddleware(
    req: Request, res: Response, next: NextFunction
) {
    const { authorization } = req.headers;

    if(!authorization){
        return res.sendStatus(401)
    }

    const token = authorization.replace('Bearer', '').trim();
  
    try{

      jwt.verify(token, 'secret');

      return next()

    } catch{
        return res.sendStatus(401)
    }
}