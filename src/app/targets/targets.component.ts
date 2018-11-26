import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
import { Observable } from 'rxjs';
import { NgForm } from "@angular/forms";
import { DomSanitizer } from '@angular/platform-browser'


@Component({
  selector: 'app-targets-page',
  templateUrl: './targets.component.html',
  styleUrls: ['./targets.component.css']
})
export class TargetsComponent implements OnInit {

  title = 'app';
  posts: any = [];

  constructor(private service:PostService){}

  

  //onAddPost(form: NgForm) {
    //this.service.addPost(form.value.url, form.value.title, form.value.image);
    //form.resetForm();
  //}

  ngOnInit(){
    /*console.log("work");
    this.ps.getPosts().subscribe(data =>
      {
        this.posts = data.posts;
      });*/
      this.posts = this.service.getPosts();
   }

}
