export class Post {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  userId: string

  constructor(entity: Post) {
    return entity;
  }
}
