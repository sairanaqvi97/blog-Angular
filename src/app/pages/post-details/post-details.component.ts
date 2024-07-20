import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { HeaderComponent } from '../../components/header/header.component';



@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [RouterLink, HeaderComponent],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent implements OnInit {
  public postId?: any;

  constructor(private route: ActivatedRoute, public route: PostsService) {

    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        this.postId = +params.get('id')!;
        this.loadPost();
      });
    }

    loadPost(): void {
      this.postService.getPostById(this.postId).subscribe(post => {
        this.post = post;
      });

    }

  }

}

