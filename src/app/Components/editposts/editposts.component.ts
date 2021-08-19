import { Component, OnInit } from '@angular/core';
import {BlogpostsService} from '../../Services/blogposts.service';
import {BrudService} from '../../Services/brud.service';
import { ActivatedRoute } from '@angular/router';
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
    private ActivatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.showloader=true;
    this.ActivatedRoute.paramMap.subscribe(params=>{
      this.pId=params.get('id');
    })

    this.brudservice.getblog(this.pId).subscribe(response=>{
      this.previousdata=[response.postdata];
      this.showloader=false;
      //console.log("Inside edit",response);
     })

  }
  EditPostsForm(formvalue:any){
    //this.showloader=true;
    this.isdisabled=true;
    this.brudservice.editblog(formvalue.value).subscribe((response)=>{
      this.blogresponse = response;
      this.isdisabled=false;
    })

    if(this.blogresponse){
      Swal.fire({
        title: 'Yayy!!',
        text: 'Changes applied successfully!',
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: 'Okay!',

      })
    }

    
  }


  Goback(){
    window.history.back();
  }

}
