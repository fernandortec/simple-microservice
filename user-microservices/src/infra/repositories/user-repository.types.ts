import { User } from "../../domain/user";

export interface UserRepository {
  create({ email, name }: { email: string; name: string }): User;
  findById(userId: number): User;
}
