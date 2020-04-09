import { Routes, RouterModule, Router } from '@angular/router';
import { BlogItemFormComponent } from './blog-item-form.component';
import { BlogItemListComponent } from './blog-item-list.component';

const appRoutes: Routes = [
  { path: 'add', component: BlogItemFormComponent },
  { path: ':category', component: BlogItemListComponent },
  { path: '', pathMatch: 'full', redirectTo: 'all' }
];

export const routing=RouterModule.forRoot(appRoutes);