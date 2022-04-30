import { Router } from "express";
import multer from 'multer';
import { multerConfig } from "../config/multer/multer";
import { PersonController } from "../controllers/person/person.controller";
import AuthMiddleware from "../middlewares/auth/authMiddleware";

const personRoutes = Router();
const personController = new PersonController()

personRoutes.post('/user/:userId/person', AuthMiddleware, personController.create)
personRoutes.get('/user/:userId/person', AuthMiddleware, personController.findOne)
personRoutes.put('/user/:userId/person', AuthMiddleware, personController.update)
personRoutes.delete('/user/:userId/person', AuthMiddleware, personController.remove)
personRoutes.patch('/user/:userId/person', AuthMiddleware, multer(multerConfig).single('image'), personController.updateSelfie )


export { personRoutes }



