export class User {
  id: number;
  name: string;
  email: string;

  constructor(entity: User) {
    return entity;
  }
}
