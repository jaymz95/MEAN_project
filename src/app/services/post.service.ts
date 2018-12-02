import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../post.model';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  constructor(private http: HttpClient) { }
  private posts: Post[] = [];

  getPostsData(): Observable<any> {
    return this.http.get("http://localhost:8081/api/posts");
  }

  addPost(name: string, weight: string, height: string): Observable<any> {
    const post: Post = { name: name, weight: weight , height: height };
    return this.http.post("http://localhost:8081/api/posts",post);
  }

  deletePost(id: String): Observable<any> {
    return this.http.delete("http://localhost:8081/api/posts/"+id);
  }

  getPost(id:String): Observable<any> {
    return this.http.get("http://localhost:8081/api/posts/"+id);
  }

  updatePost(id:String, name: string, weight: string, height: string): Observable<any> {
    const post: Post = { name: name, weight: weight , height: height };
  return this.http.put("http://localhost:8081/api/posts/"+id, post);
  }

}