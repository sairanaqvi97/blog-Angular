import { Component } from '@angular/core';
import { PostService, Post } from '../post.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  newPost: Partial<Post> = {
    title: '',
    body: '',
    author: ''
  };

  constructor(public postService: PostService) {}

  onSubmit(): void {
    const posts = this.postService.getPosts();
    const newId = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const newPost: Post = {
      id: newId,
      title: this.newPost.title!,
      body: this.newPost.body!,
      author: this.newPost.author!,
      date: new Date()
    };
    this.postService.createPost(newPost);
    this.newPost = { title: '', body: '', author: '' };
  }
}
