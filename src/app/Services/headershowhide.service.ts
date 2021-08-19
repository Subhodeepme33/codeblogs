import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeadershowhideService {

  showheader;
  constructor() {

    this.showheader=false;
    const getsession=sessionStorage.getItem('userid');
    if(getsession)
    {
      this.showheader=true;
    }
  }
}
