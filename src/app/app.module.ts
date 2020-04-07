import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BlogItemComponent} from './blog-item.component';
import { BlogItemListComponent } from './blog-item-list.component';
import {FavoriteDirective} from './favorite.directive';
import {CategoryListPipe} from './category.list.pipe';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    BlogItemComponent,
    BlogItemListComponent,
    FavoriteDirective,
    CategoryListPipe
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}