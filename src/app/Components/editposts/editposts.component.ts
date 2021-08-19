import { Component, OnInit } from '@angular/core';
import {BlogpostsService} from '../../Services/blogposts.service';
import {BrudService} from '../../Services/brud.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editposts',
  templateUrl: './editposts.component.html',
  styleUrls: ['./editposts.component.css']
})
export class EditpostsComponent implements OnInit {

  /*Form inputs */
  title:string;

  /*TS files */
  blogresponse;
  showeditor;
  loggeduser;

  //Edit tools
  pId;
  previousdata;
  showloader;
  isdisabled;

  constructor(private blogservice:BlogpostsService,
    private brudservice:BrudService,
    private ActivatedRoute:ActivatedRoute,
    private router:Router) {}

  ngOnInit(): void {
    this.showloader=true;
    this.ActivatedRoute.paramMap.subscribe(params=>{
      this.pId=params.get('id');
    })

    this.brudservice.getblog(this.pId).subscribe(response=>{
      this.previousdata=[response.postdata];
      this.showloader=false;
     })

  }
  EditPostsForm(formvalue:any){
    this.isdisabled=true;
    this.brudservice.editblog(formvalue.value).subscribe((response)=>{
      if(response){
        Swal.fire({
          title: 'Success',
          text: 'Post Edited.',
          icon: 'success',
          showCancelButton: false,
          confirmButtonText: 'Okay!',
        }).then((result)=>{
          if(result.isConfirmed){
            this.isdisabled=false;
           }
          })
        }
    })
  }


  Goback(){
    //window.history.back();
    if(sessionStorage.getItem('userid'))
    {
      this.router.navigate(['/home']);
    }

  }

}
