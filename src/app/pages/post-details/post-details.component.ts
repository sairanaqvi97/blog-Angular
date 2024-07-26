import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { HeaderComponent } from '../../components/header/header.component';
import Post from '../../Models/Post';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [RouterLink, HeaderComponent],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent implements OnInit {
  post: Post | undefined;

  constructor(private route: ActivatedRoute, private postsService: PostsService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.loadPost(id);
    });
  }

  loadPost(id: number): void {
    this.postsService.getPostById(id).subscribe(
      (post: Post) => {
        this.post = post;
      },
      (error: any) => {
        console.error('Error fetching post:', error);
        // Handle error (e.g., show error message to user)
      }
    );
  }
}
