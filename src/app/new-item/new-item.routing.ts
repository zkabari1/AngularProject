import { Routes, RouterModule } from '@angular/router';
import { BlogItemFormComponent } from './blog-item-form.component';

const newItemRoutes: Routes = [
  { path: 'add', component: BlogItemFormComponent }
];

export const newItemRouting = RouterModule.forChild(newItemRoutes);