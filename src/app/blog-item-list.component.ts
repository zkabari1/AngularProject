import {Component,OnInit} from '@angular/core';
import {BlogItemService, BlogItem} from './blog-item.service';

@Component({
    selector:'mb-blog-item-list',
    templateUrl:'./blog-item-list.component.html',
    styleUrls:['./blog-item-list.component.css']
})

export class BlogItemListComponent implements OnInit{
    category='';
    blogItems:BlogItem[];
    constructor(private blogItemService : BlogItemService){}
    ngOnInit() {
        this.getBlogItems(this.category);
    }
    onBlogItemDelete(blogItem) { 
        this.blogItemService.delete(blogItem).subscribe(()=>{this.getBlogItems(this.category)});
    }
    getBlogItems(category) {
        this.category = category;
        this.blogItemService.get(category)
          .subscribe(blogItems => {
            this.blogItems = blogItems;
          });
      }
} 