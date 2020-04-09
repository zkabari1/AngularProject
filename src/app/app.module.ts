import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BlogItemComponent} from './blog-item.component';
import { BlogItemListComponent } from './blog-item-list.component';
import {FavoriteDirective} from './favorite.directive';
import {CategoryListPipe} from './category.list.pipe';
//import {BlogItemService} from './blog-item.service';
import {lookupListToken,lookupList} from './providers';
import {HttpClientModule, HttpXhrBackend} from '@angular/common/http';
import {MockXHRBackend} from './mock-xhr.backend';
import { routing } from './app.routing';
import { CategoryListComponent } from './category-list.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
  ],
  declarations: [
    AppComponent,
    BlogItemComponent,
    BlogItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
    CategoryListComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers:[
 //   BlogItemService,
    {provide:lookupListToken,useValue:lookupList},
    {provide : HttpXhrBackend,useClass:MockXHRBackend}
  ]
})
export class AppModule {}