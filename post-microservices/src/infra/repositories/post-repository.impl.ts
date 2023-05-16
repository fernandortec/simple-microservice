import { Post } from "../../domain/post";
import { PostRepository } from "./post-repository.types";

export class PostRepositoryImpl implements PostRepository {
  private posts: Post[] = [];

  create({ description, imageUrl, title, userId }: Post): Post {
    const post = new Post({
      description,
      id: this.posts.length + 1,
      imageUrl,
      title,
      userId,
    });

    this.posts.push(post);

    return post;
  }
}
