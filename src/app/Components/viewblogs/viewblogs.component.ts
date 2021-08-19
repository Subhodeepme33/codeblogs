import { Component, OnInit } from '@angular/core';
import {BlogpostsService} from '../../Services/blogposts.service';
import {BrudService} from '../../Services/brud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewblogs',
  templateUrl: './viewblogs.component.html',
  styleUrls: ['./viewblogs.component.css']
})



export class ViewblogsComponent implements OnInit {

  pId;
  post;
  isloaded;
  constructor(private blogservice:BlogpostsService,
    private brudservice:BrudService,
    private ActivatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.isloaded=true;
    this.ActivatedRoute.paramMap.subscribe(params=>{
      this.pId=params.get('id');

    })

    this.blogservice.viewblog(this.pId).subscribe(response=>{
      this.post=[response];
      this.isloaded=false;
    });

  }

  goback(){
    window.history.back();
  }

}
