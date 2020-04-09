import { Component , OnInit, Inject} from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {BlogItemService} from './blog-item.service';
import {lookupListToken} from './providers';
import {Router} from '@angular/router';

@Component({
  selector: 'mb-blog-item-form',
  templateUrl: './blog-item-form.component.html',
  styleUrls: ['./blog-item-form.component.css']
})
export class BlogItemFormComponent implements OnInit{
    form : FormGroup;
    constructor( private formBuilder:FormBuilder, 
        private blogItemService:BlogItemService,
        @Inject(lookupListToken) public lookupList,
        private router:Router){}

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
        this.blogItemService.add(blogItem).subscribe(
            ()=>this.router.navigate(["/",blogItem.category]));
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