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

  addPost(url: string, title: string, image: string) {
    const post: Post = { url: url, title: title, image: image };
    this.posts.push(post);
  }
}