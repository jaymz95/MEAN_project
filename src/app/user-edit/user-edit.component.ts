import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes, Router } from '@angular/router';
import {PostService} from '../services/post.service';
import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  post : any = [];
  myName : String; 
  myWeight : String; 
  myHeight : String; 
  constructor(private router:Router, private route: ActivatedRoute, private service:PostService) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.service.getPost(this.route.snapshot.params['id']).subscribe(data =>
    {
      this.post = data;
      console.log(this.post);
      this.myName = this.post.title;

    });
  }
  onEditPost(form: NgForm) {
    this.service.updatePost(this.post._id, form.value.name, form.value.weight, form.value.height).subscribe(() =>
    {
      this.router.navigate(['/userD']);
    });
  }

}
