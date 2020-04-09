import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogItemFormComponent } from './blog-item-form.component';
import { newItemRouting } from './new-item.routing';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    newItemRouting
  ],
  declarations: [
    BlogItemFormComponent
  ]
})
export class NewItemModule {}