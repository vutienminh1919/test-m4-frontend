import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {PostService} from "../../../services/post.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  posts: any[] = [];
  addPostForm: FormGroup | any;

  constructor(private postService: PostService,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.addPostForm = new FormGroup({
      tag: new FormControl(''),
      url: new FormControl(''),
      descriptions: new FormControl('')
    })
  };

  createPost() {
    let post = this.addPostForm?.value;
    console.log(post);
    this.postService.createPost(post).subscribe(post => {
      this.posts.unshift(post)
    })
    this.addPostForm?.reset();
    alert('create success');
    this.router.navigate(['/posts']);
  }

}
