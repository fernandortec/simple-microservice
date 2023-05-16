import { Router } from "express";
import { UserController } from "../controllers/user-controller";
import { UserRepositoryImpl } from "../../../infra/repositories/user-repository.impl";

const userRoutes = Router();
const userRepository = new UserRepositoryImpl();
const userController = new UserController(userRepository);

userRoutes.post("/user", userController.create.bind(userController));
userRoutes.get("/user/:id", userController.findById.bind(userController));

export { userRoutes };
