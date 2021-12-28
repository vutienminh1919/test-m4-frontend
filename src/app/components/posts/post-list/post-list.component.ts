import { Component, OnInit } from '@angular/core';
import {PostService} from "../../../services/post.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
posts: any[] = [];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getALl();
  }
  getALl(){
    this.postService.getAll().subscribe( post =>{
      this.posts = post;
      console.log(post)
    })
  }
  delete(i: any){
    let post = this.posts[i];
    this.postService.deletePost(post.id).subscribe(()=>{
      this.posts = this.posts.filter( n => n.id !== post.id);
    })
  }


}
