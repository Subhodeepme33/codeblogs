import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  signUpValue : FormGroup;
  formValue: any;
  loader;

  constructor( private fb:FormBuilder, private authService:AuthenticationService,
  private router:Router ){

    this.signUpValue = this.fb.group({

      firstname:['', [Validators.required]],
      lastname:['',[Validators.required]],
      email:['', [Validators.required, Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')]],
      password:['',[Validators.required, Validators.minLength(6)]]

    })

  }

  ngOnInit(): void {
    this.loader=false;
  }

   register(){
     this.loader=true;
     this.formValue = this.signUpValue.value;

     this.authService.postSignup(this.formValue).subscribe((response)=>{

      Swal.fire({
        title: 'Success',
        text: 'Registration is successful.',
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: 'Okay!',
      }).then((result)=>{
        if(result.isConfirmed){
           this.loader=false;
           this.router.navigate(['/signin']);
         }
        })

    })
   }



  }

