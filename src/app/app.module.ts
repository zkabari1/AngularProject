import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BlogItemComponent} from './blog-item.component';
import { BlogItemListComponent } from './blog-item-list.component';
import {FavoriteDirective} from './favorite.directive';
import {CategoryListPipe} from './category.list.pipe';
import {FormsModule} from '@angular/forms';
import {BlogItemFormComponent} from './blog-item-form.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
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
  ]
})
export class AppModule {}