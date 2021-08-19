import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  signUpValue : FormGroup;
  formValue: any;


  constructor( private fb:FormBuilder, private authService:AuthenticationService) {

    this.signUpValue = this.fb.group({

      firstname:['', [Validators.required]],
      lastname:['',[Validators.required]],
      email:['', [Validators.required, Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')]],
      password:['',[Validators.required, Validators.minLength(6)]]

    })

  }

  ngOnInit(): void {}

   register(){
    //console.log(this.signUpValue.value);
    this.formValue = this.signUpValue.value;

    this.authService.postSignup(this.formValue).subscribe((response)=>{
      console.log(response);

    })
   }

   

  }

