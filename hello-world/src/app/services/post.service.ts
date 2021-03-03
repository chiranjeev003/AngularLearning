import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

   getPosts(){
     return this.http.get<any>(this.url);
   }

   deletePost(post: any){
     console.log(post + "delete post service k andar ka")
    return this.http.delete(this.url +'/'+ 589);
    }

  createPost(post: any){
    return this.http.post<any>(this.url, JSON.stringify(post))
  }

  updatePost(post: any){
    return this.http.patch<any>(this.url + '/' + post.id, JSON.stringify({ title: post}))
  }
}
