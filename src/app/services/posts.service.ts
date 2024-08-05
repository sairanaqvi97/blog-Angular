import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Post from '../Models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  readonly URL_API = 'https://my-json-server.typicode.com/mariogiron/blog-server/posts/';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(this.URL_API);
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.URL_API}${id}`);
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.URL_API, post);
  }
}
