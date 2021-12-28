import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostListComponent} from "./components/posts/post-list/post-list.component";
import {PostCreateComponent} from "./components/posts/post-create/post-create.component";
import {PostUpdateComponent} from "./components/posts/post-update/post-update.component";

const routes: Routes = [
  {
    path: "posts",
    component: PostListComponent,
  },
  {
    path: 'posts/create',
    component: PostCreateComponent
  },
  {
    path: 'posts/update/:id',
    component: PostUpdateComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
