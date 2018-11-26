import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
import { Observable } from 'rxjs';
import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-user-page',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  title = 'app';
  posts: any = [];

  constructor(private service:PostService){}

  onAddPost(form: NgForm) {
    this.service.addPost(form.value.url, form.value.title, form.value.image);
    form.resetForm();
  }

  ngOnInit(){
    /*console.log("work");
    this.ps.getPosts().subscribe(data =>
      {
        this.posts = data.posts;
      });*/
   }
}