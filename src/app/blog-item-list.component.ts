import {Component,OnInit} from '@angular/core';
import {BlogItemService} from './blog-item.service';

@Component({
    selector:'mb-blog-item-list',
    templateUrl:'./blog-item-list.component.html',
    styleUrls:['./blog-item-list.component.css']
})

export class BlogItemListComponent implements OnInit{
    blogItems;
    constructor(private blogServiceItem : BlogItemService){}
    ngOnInit(){
        this.blogItems=this.blogServiceItem.get();
    }
    onBlogItemDelete(blogItem) { 
        this.blogServiceItem.delete(blogItem);
    }
    
} 