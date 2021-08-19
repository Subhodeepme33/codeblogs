import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blogs } from '../API_Classes/blogs';

@Injectable({
  providedIn: 'root'
})
export class BlogpostsService {

  data;
  constructor(private http:HttpClient) { }

  addblogURL="https://meandemoapi.herokuapp.com/addPosts";
  viewurl=`https://meandemoapi.herokuapp.com/viewpost/`;
  viewblogurl="";

  postblog(formdata:any):Observable<Blogs[]>
  {

    return this.http.post<any>(this.addblogURL,formdata);
  }

  viewblog(id:any):Observable<Blogs[]>
  {
    this.viewblogurl=this.viewurl+id;
    return this.http.get<any>(this.viewblogurl);
  }

}
