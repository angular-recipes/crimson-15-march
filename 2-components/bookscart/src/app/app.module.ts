import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { BookDetailsPageComponent } from './components/book-details-page/book-details-page.component';
import { HighlightDirective } from './directives/highlight.directive';
import { AddBookPageComponent } from './components/add-book-page/add-book-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutComponent,
    ContactComponent,
    BookDetailsPageComponent,
    HighlightDirective,
    AddBookPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
