import { Router } from "express";
import { UserController } from "../controllers/user/user.controller";
import { AuthController } from "../controllers/auth/auth.controller";
import AuthMiddleware from "../middlewares/auth/authMiddleware";

const userRoutes = Router();
const userController = new UserController()
const authController = new AuthController();

userRoutes.post('/user/auth/login', authController.authenticate)
userRoutes.post('/user', userController.create)
userRoutes.get('/user', userController.findAll)
userRoutes.get('/user/:id', AuthMiddleware, userController.findOne)
userRoutes.put('/user/:id', AuthMiddleware, userController.update)
userRoutes.delete('/user/:id', AuthMiddleware, userController.remove)


export { userRoutes }



