import { Component , OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'mb-blog-item-form',
  templateUrl: './blog-item-form.component.html',
  styleUrls: ['./blog-item-form.component.css']
})
export class BlogItemFormComponent {
    form : FormGroup;
    ngOnInit(){
        this.form = new FormGroup({
            title:new FormControl('',Validators.required),
            author:new FormControl('',Validators.compose([
                Validators.required,
                Validators.pattern('[\\w\\-\\s\\/]+')])),
            content:new FormControl('',Validators.required),
            category:new FormControl('Action'),
            date:new FormControl('',this.dateValidator),
        });
    }
    onSubmit(blogItem){
        console.log(blogItem);
    }
    
    dateValidator(control:FormControl){
        if(control.value.trim().length === 0){
            return null;
        }
        const date = Date.parse(control.value);
        if (isNaN(date)) {
            return  {date:true};
        }else{
            return null;
        }
    }
    
}