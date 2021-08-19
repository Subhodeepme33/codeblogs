import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { HeadershowhideService } from 'src/app/Services/headershowhide.service';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loader;
  isnotmobile;
  constructor(private authService:AuthenticationService,
    private store:StorageService, private router:Router,
    private showheader:HeadershowhideService) { }

  loginResponse;
  data;

  ngOnInit(): void {
    this.loader=false;
    if (navigator.userAgent.match(/Android/i)
                || navigator.userAgent.match(/webOS/i)
                || navigator.userAgent.match(/iPhone/i)
                || navigator.userAgent.match(/iPad/i)
                || navigator.userAgent.match(/iPod/i)
                || navigator.userAgent.match(/BlackBerry/i)
                || navigator.userAgent.match(/Windows Phone/i)){

                  this.isnotmobile=true;
                }

  }

    loginForm(formValue:any){
      this.loader=true;
      this.authService.postSignin(formValue.value).subscribe((response)=>{

          this.loginResponse = response;
          this.store.SetResponseFromLogin(this.loginResponse.token, this.loginResponse.result._id);
          this.router.navigate(['/home']);
          this.showheader.showheader=true;
          this.loader=false;

      })


    }



}
