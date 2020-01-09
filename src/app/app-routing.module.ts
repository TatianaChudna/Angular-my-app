import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogComponent} from './components/blog/blog.component';

const routes: Routes = [
  { path: 'blog', component: BlogComponent }
  // {path: '', redirectTo: '/blog', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
