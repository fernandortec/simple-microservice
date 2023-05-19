import { User, UserModel } from "../../domain/user";
import { UserRepository } from "./user-repository.types";

class UserRepositoryImpl implements UserRepository {
  private userModel = UserModel;

  async create({ email, name }: User): Promise<User> {
    const user = await this.userModel.create({ email, name });

    return user;
  }

  async findById(userId: string): Promise<User | null> {
    const user = await this.userModel.findById(userId);

    return user;
  }
}

export { UserRepositoryImpl };
