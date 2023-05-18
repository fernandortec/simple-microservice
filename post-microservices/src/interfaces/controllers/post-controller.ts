import { Request, Response } from "express";
import { Post } from "../../domain/post";
import { PostRepository } from "../../infra/repositories/post-repository.types";
import { UserServices } from "../../services/user-microservice-api";

class PostController {
  constructor(
    private postRepository: PostRepository,
    private userServices = UserServices
  ) {}

  async create(
    request: Request<{}, {}, Post>,
    response: Response
  ): Promise<Response<Post>> {
    const { description, imageUrl, title, userId } = request.body;

    const isUser = !!(await this.userServices.findById(+userId));

    if (!isUser) throw new Error("user does not exists");

    const post = this.postRepository.create({
      description,
      imageUrl,
      title,
      userId,
    });

    return response.send(post).status(201);
  }
}
export { PostController };
