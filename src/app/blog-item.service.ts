import {Injectable} from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {map,catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
@Injectable({
    providedIn:'root'
})
export class BlogItemService{
    blogItems;
    constructor(private  http:HttpClient) {}

    get(category) {
        const getOptions={
            params:{category}
        };
        return this.http.get<BlogItemResponse>('blogItems',getOptions)
        .pipe(
            map((response:BlogItemResponse)=>{
                return response.blogItems;
            }),
            catchError(this.handleError)
            )
      }
    
      add(blogItem) {
        return this.http.post('blogItems',blogItem)
        .pipe(catchError(this.handleError));
      }
    
      delete(blogItem) {
        return this.http.delete(`blogItems/${blogItem.id}`)
        .pipe(catchError(this.handleError));
      }
      handleError(error:HttpErrorResponse){
          console.log(error.message);
          return throwError('Data error occured. Please try again.');
      }
}
export interface BlogItem{
    id:number;
    title:string;
    author:string;
    content:string;
    date:Date;
    category:string;
    isFavorite:boolean;
}
interface BlogItemResponse{
    blogItems:BlogItem[];
}