import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetpostsService {

  constructor(private http:HttpClient) { }

  getpostURL="https://meandemoapi.herokuapp.com/getPosts";

  getpostURL1=`https://meandemoapi.herokuapp.com/getPostsss/`;
  newurl="";

  getposts(id:any):Observable<any>{
    
    this.newurl=this.getpostURL1+id;
    return this.http.get<any>(this.newurl);

  }

}
