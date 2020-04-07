import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BlogItemComponent} from './blog-item.componen';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    BlogItemComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}