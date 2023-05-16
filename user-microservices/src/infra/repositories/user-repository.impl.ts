import { User } from "../../domain/user";
import { UserRepository } from "./user-repository.types";

class UserRepositoryImpl implements UserRepository {
  private users: User[] = [];

  create({ email, name }: User): User {
    const user = new User({ email, id: this.users.length + 1, name });

    this.users.push(user);

    return user;
  }

  findById(userId: number): User {
    const user = this.users.filter((user) => user.id === userId);

    return user[0];
  }
}

export { UserRepositoryImpl };
