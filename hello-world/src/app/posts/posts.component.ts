import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';
import { Observable, throwError } from 'rxjs';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];

  constructor(private service: PostService){ 
    
  }

  createPost(input: HTMLInputElement){
    let post: any = {
      title: input.value
    }
    this.service.createPost(post)
        .subscribe(response => {
          post['id'] = response.id;
          this.posts.splice(0,0, post);
          input.value='';
          console.log(response);
        });
  }

  updatePost(post: any){
    this.service.updatePost(post)
          .subscribe((response: any) => {
            console.log(response) 
          });
  }

  deletePost(post: any){
      console.log(post);
      this.service.deletePost(589)
          .subscribe(
            response => {
            let index = this.posts.indexOf(post);
            if(index == -1)
              throwError(Response.error);
            console.log("response me receive kiya hua "+index);
            console.log("response k andar ka " + JSON.stringify(post));                       
            this.posts.splice(index,1);
            console.log("response k andar ka " + JSON.stringify(post));
            console.log("response k andar ka " + response);

            }, 
            (error: Response) => {
              if(error.status === 404){
                alert('post is already deleted');
              }
              else
                alert('bad request');
            }
          );
  }

  ngOnInit() {
      this.service.getPosts()
          .subscribe(response => {
          console.log(response);
          this.posts = response;
        });
    
  }

}
