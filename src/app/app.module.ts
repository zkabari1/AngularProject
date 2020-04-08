import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BlogItemComponent} from './blog-item.component';
import { BlogItemListComponent } from './blog-item-list.component';
import {FavoriteDirective} from './favorite.directive';
import {CategoryListPipe} from './category.list.pipe';
import {ReactiveFormsModule} from '@angular/forms';
import {BlogItemFormComponent} from './blog-item-form.component';
//import {BlogItemService} from './blog-item.service';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    BlogItemComponent,
    BlogItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
    BlogItemFormComponent
  ],
  bootstrap: [
    AppComponent
  ],
 /* providers:[
    BlogItemService
  ]*/
})
export class AppModule {}