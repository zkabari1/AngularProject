import { Component , OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'mb-blog-item-form',
  templateUrl: './blog-item-form.component.html',
  styleUrls: ['./blog-item-form.component.css']
})
export class BlogItemFormComponent {
    form : FormGroup;
    ngOnInit(){
        this.form = new FormGroup({
            title:new FormControl(''),
            author:new FormControl(''),
            content:new FormControl(''),
            category:new FormControl('Action'),
            date:new FormControl(this.getTodayDate())
            
        });
    }
    onSubmit(blogItem){
        console.log(blogItem);
    }
    getTodayDate(){
        var date = new Date();
        return (date.getMonth()+1)+'/'+date.getDate()+'/'+date.getFullYear();
    }
}