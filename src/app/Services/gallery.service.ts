import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http:HttpClient) { }
  galleryApiUrl = "https://jsonplaceholder.typicode.com/photos";

  myPhotos():Observable<any>{
    return this.http.get<any>(this.galleryApiUrl);
  }
}
