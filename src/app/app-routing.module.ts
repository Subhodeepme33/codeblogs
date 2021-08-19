import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AboutComponent } from './Components/about/about.component';
import { AddpostsComponent } from './Components/addposts/addposts.component';
import { SignUpComponent } from './Components/Auth/sign-up/sign-up.component';
import { SigninComponent } from './Components/Auth/signin/signin.component';
import { ContactComponent } from './Components/contact/contact.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { HomeComponent } from './Components/home/home.component';
import { PagenotfoundComponent } from './Layout/pagenotfound/pagenotfound.component';
import { EditpostsComponent } from './Components/editposts/editposts.component';
import { ViewblogsComponent } from './Components/viewblogs/viewblogs.component';


const routes: Routes = [

  {path:'',redirectTo:'/signin',pathMatch:'full'},
  {path:'home',component:HomeComponent },
  {path:'addposts', component:AddpostsComponent},

  {path:'editposts/:id', component:EditpostsComponent},
  {path:'viewposts/:id', component:ViewblogsComponent},

  {path:'about',component:AboutComponent,canActivate:[AuthGuard]},
  {path:'contact',component:ContactComponent},
  {path:'signin', component:SigninComponent},
  {path:'signup',component:SignUpComponent},
  {path:'photos',component:GalleryComponent},

  {path:'**',component:PagenotfoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
