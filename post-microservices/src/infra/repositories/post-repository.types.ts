import { Post } from "../../domain/post";

export interface PostRepository {
  create({ description, imageUrl, title, userId }: Omit<Post, 'id'>): Post;
}
