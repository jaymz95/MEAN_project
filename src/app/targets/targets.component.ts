import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
import { Observable } from 'rxjs';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-targets-page',
  templateUrl: './targets.component.html',
  styleUrls: ['./targets.component.css']
})
export class TargetsComponent implements OnInit {

  title = 'app';
  posts: any = [];
  minWalk: any = 0;
  minRun: any = 0;
  minSwim: any = 0;
  minCycle: any = 0;
  minSauna: any = 0;
  tips: any = [];
  
  constructor(private service:PostService){}

  calculate(form: NgForm) {
    //checking if there is a user
    if(this.posts.length > 0){
      //calculating how much expercise it will take to burn the calories you have consumed
      this.minWalk = Number(form.value.calories)/((0.035*Number(this.posts[0].weight))+((1.4*1.4)/Number(this.posts[0].height))*(0.029)*(Number(this.posts[0].weight)));
      this.minRun = Number(form.value.calories)/((0.035*Number(this.posts[0].weight))+((3*3)/Number(this.posts[0].height))*(0.029)*(Number(this.posts[0].weight))/3.1);
		  this.minSwim = Number(form.value.calories)/(1.1 * (4.8 * 3.5 * Number(this.posts[0].weight)) / 200);
		  this.minCycle = Number(form.value.calories)/(1.1 * (4.8 * 3.9 * Number(this.posts[0].weight)) / 200);
		  this.minSauna = Number(form.value.calories)/(((Number(this.posts[0].weight) / 1.9979666667) * 1.5)/30);
    }
    console.log(this.minWalk);
    console.log(this.minRun);
    console.log(this.minSwim);
    console.log(this.minCycle);
    console.log(this.minSauna);
    form.resetForm();
  }

  ngOnInit(){
    this.service.getPostsData().subscribe(data => {
      this.posts = data;
    });
  }

}
