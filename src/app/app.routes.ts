import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostListComponent } from './pages/post-list/post-list.component';
import { DetailPostComponent } from './pages/post-details/post-details.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';


export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'postList', component: PostListComponent},
    { path: 'createPost', component:CreatePostComponent },
    {path: 'detail-post/:postid', component:DetailPostComponent},
];
