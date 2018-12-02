import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
import { Observable } from 'rxjs';
import { NgForm } from "@angular/forms";
import { DomSanitizer } from '@angular/platform-browser'

var minWalk;
@Component({
  selector: 'app-targets-page',
  templateUrl: './targets.component.html',
  styleUrls: ['./targets.component.css']
})
export class TargetsComponent implements OnInit {

  title = 'app';
  posts: any = [];
  

  constructor(private service:PostService){}

  calculate(form: NgForm) {
    console.log(Number(form.value.calories));
    console.log(Number(form.value.name));
    minWalk = Number(form.value.calories)/((0.035*74)+((1.4*1.4)/1.8)*(0.029)*(74));
    console.log(minWalk);
    form.resetForm();
    console.log("qwerty");
  }

  ngOnInit(){
    /*console.log("work");
    this.ps.getPosts().subscribe(data =>
      {
        this.posts = data.posts;
      });*/
      //this.posts = this.service.getPosts();

    this.service.getPostsData().subscribe(data => {
      this.posts = data;
    });
   }

}
