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

  getPosts() {
    return [...this.posts];
  }

  addPost(name: string, weight: string, height: string) {
    const post: Post = { name: name, weight: weight , height: height };
    this.posts.push(post);
    console.log("please work");
  }
}

/*import { Injectable, OnInit } from '@angular/core';
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

  getPosts() {
    return [...this.posts];
  }

  addPost(name: string, weight: string, height: string) {
    const post: Post = { name: name, weight: weight, height: height };
    this.posts.push(post);
  }
}*/