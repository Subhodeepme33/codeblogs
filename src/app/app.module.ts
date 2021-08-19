import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { SignUpComponent } from './Components/Auth/sign-up/sign-up.component';
import { SigninComponent } from './Components/Auth/signin/signin.component';
import { PagenotfoundComponent } from './Layout/pagenotfound/pagenotfound.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './Components/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { AddpostsComponent } from './Components/addposts/addposts.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditpostsComponent } from './Components/editposts/editposts.component';
import { ParsehtmlPipe } from './Components/home/parsehtml.pipe';
import { ViewblogsComponent } from './Components/viewblogs/viewblogs.component';
import { SafehtmlPipe } from './Components/viewblogs/safehtml.pipe';
import { TruncatePipe } from './Components/home/truncate.pipe';
import { UsermenuComponent } from './Layout/usermenu/usermenu.component';



@NgModule({
   declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    SignUpComponent,
    SigninComponent,
    PagenotfoundComponent,
    ContactComponent,
    GalleryComponent,
    AddpostsComponent,
    EditpostsComponent,
    ParsehtmlPipe,
    ViewblogsComponent,
    SafehtmlPipe,
    TruncatePipe,
    UsermenuComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EditorModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
