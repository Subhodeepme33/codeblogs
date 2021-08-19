import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/Services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {

  constructor(private galleryService:GalleryService) { }
  data:any;
  ngOnInit(): void {
    this.galleryService.myPhotos().subscribe((response)=>{
      console.log("Inside Gallery");
      console.log(response);
      this.data=response;
    })
  }


}
