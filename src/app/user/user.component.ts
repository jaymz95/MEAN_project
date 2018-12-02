import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
import { Observable } from 'rxjs';
import { NgForm } from "@angular/forms";
import {Post} from '../post.model';
import {Router, ActivatedRoute} from '@angular/router';
import { RouterModule, Routes} from '@angular/router';


@Component({
  selector: 'app-user-page',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  title = 'app';
  posts: any = [];

  // shows/hides "Get Stared" Button
  private startedVisible = true;
  // shows/hides form
  private formVisible = true;

  constructor(private ps:PostService){}

  onAddPost(form: NgForm) {

    this.ps.addPost(form.value.name, form.value.weight, form.value.height).subscribe();
    console.log(form.value);
    form.resetForm();

  }
  
  ngOnInit(){
    
  }

}