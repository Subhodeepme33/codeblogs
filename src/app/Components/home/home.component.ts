import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrudService } from 'src/app/Services/brud.service';
import { GetpostsService } from 'src/app/Services/getposts.service';
import Swal from 'sweetalert2';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {

  /* Declarations */

  posts;
  totalposts;
  show;
  loggeduser;
  isedit;
  allposts;
  pId;
  constructor(private getpostservice:GetpostsService,
      private brudservice:BrudService,
      private router:Router,
      private sanitizer:DomSanitizer
    ) { }

  ngOnInit(): void {

      this.loggeduser = sessionStorage.getItem('userid');
      this.show=true;
      this.isedit=false;

      this.getpostservice.getposts(this.loggeduser).subscribe(data=>{
           this.posts = data.postdata;
            this.totalposts=this.posts.length;

           this.show=false;
    })

      this.brudservice.getallblogs().subscribe(data=>{
        this.allposts=[data];

      })

  }


  editpost(id){
    this.router.navigate(['/editposts',id]);
  }


  deleteposts(id)
  {
    this.brudservice.deleteblog(id).then((response)=>{
      Swal.fire({
        title: 'Success',
        text: 'You blog has been deleted successfully!',
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: 'Okay!',

      }).then((result)=>{
        if(result.isConfirmed){
          window.location.reload();
        }
      })
      //
    })
  }


  viewpost(id){
    this.router.navigate(['/viewposts',id]);
  }
}
