import { User } from "../../domain/user";

export interface UserRepository {
  create({ email, name }: { email: string; name: string }): Promise<User>;
  findById(userId: string): Promise<User | null>;
}
