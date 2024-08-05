import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import Post from '../../Models/Post';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [RouterLink, HeaderComponent],
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: Post | undefined;

  constructor(private route: ActivatedRoute, private postsService: PostsService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (id) {
        this.loadPost(id);
      } else {
        console.error('Invalid post ID');
        // Optionally, handle invalid ID case
      }
    });
  }

  loadPost(id: number): void {
    this.postsService.getPostById(id).subscribe(
      (post: Post) => {
        this.post = post;
      },
      (error: any) => {
        console.error('Error fetching post:', error);
        // Optionally, set a flag to show an error message in the template
      }
    );
  }
}
