import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Post from '../Models/Post';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  readonly URL_API = 'https://my-json-server.typicode.com/mariogiron/blog-server/posts/';

  posts: Post[];

  constructor(private http: HttpClient) {
    this.posts = [];
  }

  getAll() {
    return this.http.get<Post[]>(this.URL_API);
  }

  getById(id: string) {
    return this.http.get<Post>(`${this.URL_API}${id}`);
  }

  createPost(post: Post) {
    return this.http.post<Post>(this.URL_API, post);
  }
}
