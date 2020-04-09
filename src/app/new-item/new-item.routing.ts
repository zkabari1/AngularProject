import { Routes, RouterModule } from '@angular/router';
import { BlogItemFormComponent } from './blog-item-form.component';

const newItemRoutes: Routes = [
  { path: '', component: BlogItemFormComponent }
];

export const newItemRouting = RouterModule.forChild(newItemRoutes);