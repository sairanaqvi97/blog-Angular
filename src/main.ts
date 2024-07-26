import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from '../src/app/app.routes'
import { CreatePostComponent } from './app/pages/create-post/create-post.component';
import { PostDetailsComponent } from './app/pages/post-details/post-details.component';
import { PostListComponent } from './app/pages/post-list/post-list.component';


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes)
  ]
})  .catch((err) => console.error(err));
