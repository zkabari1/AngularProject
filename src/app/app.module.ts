import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BlogItemComponent} from './blog-item.component';
import { BlogItemListComponent } from './blog-item-list.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    BlogItemComponent,
    BlogItemListComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}