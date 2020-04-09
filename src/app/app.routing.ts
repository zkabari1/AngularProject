import { Routes, RouterModule, Router } from '@angular/router';
import { BlogItemListComponent } from './blog-item-list.component';

const appRoutes: Routes = [
  { path: ':category', component: BlogItemListComponent },
  { path: '', pathMatch: 'full', redirectTo: 'all' }
];

export const routing=RouterModule.forRoot(appRoutes);