import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbCarouselModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatIconModule} from '@angular/material/icon';
import { IconsModule } from 'angular-bootstrap-md';

import { ChartsModule, WavesModule } from 'angular-bootstrap-md';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BlogComponent} from './components/blog/blog.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GraphicsComponent } from './components/graphics/graphics.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    HeaderComponent,
    FooterComponent,
    GalleryComponent,
    GraphicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCarouselModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
    MatIconModule,
    IconsModule,
    ChartsModule,
    WavesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
