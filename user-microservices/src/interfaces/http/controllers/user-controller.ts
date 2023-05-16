import { Request, Response } from "express";
import { User } from "../../../domain/user";
import { UserRepository } from "../../../infra/repositories/user-repository.types";

class UserController {
  constructor(private userRepository: UserRepository) {}

  create(request: Request<{}, {}, User>, response: Response): Response<User> {
    const { email, name } = request.body;
    const user = this.userRepository.create({ email, name });

    return response.json(user).status(201);
  }

  findById(request: Request, response: Response): Response<User> {
    const user = this.userRepository.findById(+request.params.id);

    return response.json(user);
  }
}
export { UserController };
