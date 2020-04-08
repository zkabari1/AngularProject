import { Component , OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'mb-blog-item-form',
  templateUrl: './blog-item-form.component.html',
  styleUrls: ['./blog-item-form.component.css']
})
export class BlogItemFormComponent {
    form : FormGroup;
    constructor( private formBuilder:FormBuilder){}

    ngOnInit(){
        this.form = this.formBuilder.group({
            title:this.formBuilder.control('',Validators.required),
            author:this.formBuilder.control('',Validators.compose([
                Validators.required,
                Validators.pattern('[\\w\\-\\s\\/]+')])),
            content:this.formBuilder.control('',Validators.required),
            category:this.formBuilder.control('Action'),
            date:this.formBuilder.control('',this.dateValidator),
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