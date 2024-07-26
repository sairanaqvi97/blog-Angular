import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import Post from '../../Models/Post';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule],
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  newPost: Partial<Post> = {
    title: '',
    text: '',
    author: '',

  };

  constructor(public postsService: PostsService) {}

  onSubmit(): void {
    this.postsService.getAll().subscribe(posts => {
      const newId = posts.length ? posts[posts.length - 1].id + 1 : 1;
      const newPost: Post = {
        id: newId,
        title: this.newPost.title!,
        text: this.newPost.text!,
        author: this.newPost.author!,
        publishDate: new Date()
      };
      this.postsService.createPost(newPost);
      this.newPost = { title: '', text: '', author: '' };
    });
  }
}
