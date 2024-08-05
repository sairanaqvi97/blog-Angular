import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { PostsService } from '../../services/posts.service';
import Post from '../../Models/Post';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [RouterLink, HeaderComponent, CommonModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];

  constructor(public postsService: PostsService, private router: Router) { }

  ngOnInit(): void {
    this.getPostFromComponent();
  }

  getPostFromComponent() {
    this.postsService.getAll().subscribe({
      next: (data: Post[]) => {
        console.log(data);
        this.posts = data;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  trackById(index: number, post: Post): number {
    return post.id;
  }

  navigateToPostDetails(postId: number) {
    this.router.navigate(['/post', postId]);
}
}
