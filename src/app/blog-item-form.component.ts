import { Component } from '@angular/core';

@Component({
  selector: 'mb-blog-item-form',
  templateUrl: './blog-item-form.component.html',
  styleUrls: ['./blog-item-form.component.css']
})
export class BlogItemFormComponent {
    onSubmit(blogItem){
        console.log(blogItem);
    }
}