
import { Component, OnInit } from '@angular/core';
import {BlogpostsService} from '../../Services/blogposts.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-addposts',
  templateUrl: './addposts.component.html',
  styleUrls: ['./addposts.component.css']
})
export class AddpostsComponent implements OnInit {
  value: number;
  toggle:false;
  constructor(private blogservice:BlogpostsService)
    { }


  blogresponse;
  showeditor;
  loggeduser
  ngOnInit(): void {
    this.showeditor=true;
    this.loggeduser = sessionStorage.getItem('userid');
  }

  AddPostsForm(formvalue:any){
    this.showeditor=false;
    this.loggeduser = sessionStorage.getItem('userid');
    this.blogservice.postblog(formvalue.value).subscribe((response)=>{
      this.blogresponse = response;
      this.showeditor=true;

      /* Changes */
      Swal.fire({
        title: 'Yayy!!',
        text: 'You blog has been posted successfully!',
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: 'Okay!',

      })


    })
  }

}
