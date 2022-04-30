import { Router } from "express";
import { AdressController } from "../controllers/adress/adress.controller";
import AuthMiddleware from "../middlewares/auth/authMiddleware";

const adressRoutes = Router();
const adressController = new AdressController()

adressRoutes.post('/user/person/:personId/adress', AuthMiddleware, adressController.create)
adressRoutes.get('/user/person/:personId/adress', AuthMiddleware, adressController.findAll)
adressRoutes.get('/user/person/:personId/adress/:id', AuthMiddleware, adressController.findOne)
adressRoutes.put('/user/person/:personId/adress/:id', AuthMiddleware, adressController.update)
adressRoutes.delete('/user/person/:personId/adress/:id', AuthMiddleware, adressController.remove)


export { adressRoutes }



