import { AddBookPageComponent } from './components/add-book-page/add-book-page.component';
import { BookDetailsPageComponent } from './components/book-details-page/book-details-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'add-book', component: AddBookPageComponent},
  {path: 'book/:id', component: BookDetailsPageComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
