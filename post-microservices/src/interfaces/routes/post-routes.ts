import { Router } from "express";
import { PostRepositoryImpl } from "../../infra/repositories/post-repository.impl";
import { PostController } from "../controllers/post-controller";

const postRoutes = Router();
const postRepository = new PostRepositoryImpl();
const postController = new PostController(postRepository);

postRoutes.post("/post", postController.create.bind(postController));

export { postRoutes };
