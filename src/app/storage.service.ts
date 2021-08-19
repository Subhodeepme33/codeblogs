import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  SetResponseFromLogin(token,userid){

    window.sessionStorage.setItem('token',token);
    window.sessionStorage.setItem('userid',userid);
  }

  getToken(){
    window.sessionStorage.getItem('token');
    window.sessionStorage.getItem('userid');
  }

  removeToken(){
    window.sessionStorage.clear();
  }


  constructor() { }
}
