import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
import { Observable } from 'rxjs';
import {Post} from '../post.model';
import { AnimationStyleNormalizer } from '@angular/animations/browser/src/dsl/style_normalization/animation_style_normalizer';

@Component({
    selector: 'user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {
    posts: any = [];
    constructor(private ps:PostService){}
    
    ngOnInit(){
        this.ps.getPostsData().subscribe(data => {
            this.posts = data;
        });
        
    }
    onDelete(id:String){
        console.log("Delete called "+ id);
        this.ps.deletePost(id).subscribe(() =>
        {
           this.ngOnInit();
        })
    }
}