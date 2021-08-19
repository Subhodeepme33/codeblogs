import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {


  contactus : FormGroup;

  constructor(private fb:FormBuilder) {

    this.contactus = this.fb.group({

      name:['', [Validators.required]],
      phone:['',[Validators.required]],
      email:['', [Validators.required, Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$') ]],
      content:['',[Validators.required]]

    })
   }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.contactus.value);

  }
}
