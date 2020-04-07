import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector:'mb-blog-item',
    templateUrl:'./blog-item.component.html',
    styleUrls:['./blog-item.component.css']
})

export class BlogItemComponent{
    
    @Input() blogItem;
    @Output() delete = new EventEmitter();
    onDelete(){
        console.log('Deleted');
        this.delete.emit(this.blogItem);
    }
} 