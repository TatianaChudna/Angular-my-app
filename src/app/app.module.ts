import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbCarouselModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatIconModule} from '@angular/material/icon';
import {IconsModule} from 'angular-bootstrap-md';
import {TableModule} from 'angular-bootstrap-md';
import {ChartsModule, WavesModule} from 'angular-bootstrap-md';
import {MDBBootstrapModule} from 'angular-bootstrap-md';

import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {HomeComponent} from './components/home/home.component';
import {GalleryComponent} from './components/gallery/gallery.component';
import {TableComponent} from './components/table/table.component';
import {BlogComponent} from './components/blog/blog.component';
import {FooterComponent} from './components/footer/footer.component';
import {FormsModule} from '@angular/forms';
import {ArticleComponent} from './components/blog/article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    GalleryComponent,
    TableComponent,
    BlogComponent,
    FooterComponent,
    ArticleComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    NgbCarouselModule,
    MatIconModule,
    IconsModule,
    TableModule,
    ChartsModule,
    WavesModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    RouterModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
