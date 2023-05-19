import { Request, Response } from "express";
import { User } from "../../../domain/user";
import { UserRepository } from "../../../infra/repositories/user-repository.types";

class UserController {
  constructor(private userRepository: UserRepository) {}

  async create(
    request: Request<{}, {}, User>,
    response: Response
  ): Promise<Response<User>> {
    const { email, name } = request.body;
    const user = await this.userRepository.create({ email, name });

    return response.json(user).status(201);
  }

  async findById(
    request: Request,
    response: Response
  ): Promise<Response<User>> {
    const user = await this.userRepository.findById(request.params.id);

    return response.json(user);
  }
}
export { UserController };
