import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {PostService} from "../../../services/post.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.css']
})
export class PostUpdateComponent implements OnInit {
  updatePostForm: FormGroup | any;
  id: any;

  constructor(private postService: PostService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.getPost(this.id);
    })
  }

  ngOnInit(): void {
  }

  getPost(id: any) {
    return this.postService.findById(id).subscribe(post => {
      console.log(post)
      this.updatePostForm = new FormGroup({
        tag: new FormControl(post.tag),
        url: new FormControl(post.url),
        descriptions: new FormControl(post.descriptions),
      })
    })
  }

  updatePost(id: any) {
    let post = this.updatePostForm.value;
    this.postService.updatePost(id, post).subscribe(() => {
        alert('update sucess');
        this.router.navigate(['/posts'])
      }, error => {
        console.log(error)
      }
    )
  }

}
