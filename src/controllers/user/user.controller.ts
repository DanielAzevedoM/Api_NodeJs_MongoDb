import { Request, Response } from "express";
import { UserService } from "../../services/user/user.service";

const userService = new UserService();

class UserController {
    async create(request: Request, response: Response){
        const user = request.body;

        const result = await userService.create(user);

        if(result instanceof Error) return response.status(400).json(result.message);
    
        return response.json(result);
    }

    async findAll(request: Request, response: Response){
        const result = await userService.findAll();

        return response.json(result);
    }

    async findOne(request: Request, response: Response){
        const params = request.params;

        const result = await userService.findOne(params.id);

        if(result instanceof Error) return response.status(400).json(result.message);
    
        return response.json(result);
    }

    async update(request: Request, response: Response){
        const user = request.body;
        
        const params = request.params;

        const result = await userService.update(params.id, user)

        if(result instanceof Error) return response.status(400).json(result.message);

        return response.json(result)
    }

    async remove(request: Request, response: Response){
        const params = request.params;

        const result = await userService.remove(params.id);
        
        if(result instanceof Error) return response.status(400).json(result.message);

        return response.json(result)
    }
     
}

export { UserController }