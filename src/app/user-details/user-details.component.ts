import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
import { Observable } from 'rxjs';
import {Post} from '../post.model';

@Component({
    selector: 'user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {
    posts: any = [];
    constructor(private ps:PostService){}
    ngOnInit(){
        this.posts = this.ps.getPosts();
    }
}
