import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgbCarouselModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatIconModule} from '@angular/material/icon';
import {IconsModule} from 'angular-bootstrap-md';
import {TableModule} from 'angular-bootstrap-md';
import {ChartsModule, WavesModule} from 'angular-bootstrap-md';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule, MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {CookieService} from 'ngx-cookie-service';

import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {AuthGuard} from './services/auth.guard';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {HomeComponent} from './components/home/home.component';
import {GalleryComponent} from './components/gallery/gallery.component';
import {TableComponent} from './components/table/table.component';
import {BlogComponent} from './components/blog/blog.component';
import {FooterComponent} from './components/footer/footer.component';
import {ArticleComponent} from './components/blog/article/article.component';
import {LoginComponent} from './components/login/login.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {DialogComponent} from './components/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    GalleryComponent,
    TableComponent,
    BlogComponent,
    FooterComponent,
    ArticleComponent,
    LoginComponent,
    RegistrationComponent,
    DialogComponent
  ],
  entryComponents: [DialogComponent],
  imports: [
    NgbModule,
    BrowserModule,
    HttpClientModule,
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
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [CookieService, AuthGuard, {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent]
})

export class AppModule {
}
