import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'categoryList'
})

export class CategoryListPipe implements PipeTransform{
    transform(blogItems){
        const categories = [];
        blogItems.forEach(blogItem => {
        if (categories.indexOf(blogItem.genre) <= -1) {
            categories.push(blogItem.genre);
        }
        });
        return categories.join(', ');
    }
}