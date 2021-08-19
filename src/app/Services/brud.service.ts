import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blogs } from '../API_Classes/blogs';

@Injectable({
  providedIn: 'root'
})
export class BrudService {

  getblogeditdata;

  constructor(private http:HttpClient) { }

  editBlogURL=`https://meandemoapi.herokuapp.com/postEdit/`;
  deleteblogURL=`https://meandemoapi.herokuapp.com/postDelete/`;
  posteditUrl=`https://meandemoapi.herokuapp.com/postEditPosts`;
  getallblogURL=`https://meandemoapi.herokuapp.com/getPosts`
  newurl="";

  editblog(formdata:any):Observable<Blogs[]>
  {

    console.log("Inside editblog function",formdata);
    return this.http.post<Blogs[]>(this.posteditUrl,formdata);



  }

  getblog(id:any):Observable<any>{
     this.newurl=this.editBlogURL+id;
     return this.http.get<any>(this.newurl);

  }

  deleteblog(id:any)
  {

    this.newurl=this.deleteblogURL+id;
    return this.http.get(this.newurl).toPromise().then((data)=>{

      return data;
    })

  }

  getallblogs():Observable<any>{

    return this.http.get<any>(this.getallblogURL);
  }

}
