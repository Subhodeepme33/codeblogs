import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../API_Classes/users';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor(private http:HttpClient) { }

  signupURL="https://meandemoapi.herokuapp.com/postform";

  signinURL="https://meandemoapi.herokuapp.com/postLogin";

  postSignup(formData:any):Observable<Users[]>
  {

    return this.http.post<Users[]>(this.signupURL, formData);

  }

  postSignin(formData:any):Observable<Users[]>
  {
    return this.http.post<Users[]>(this.signinURL, formData);
  }

}
