
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeadershowhideService } from 'src/app/Services/headershowhide.service';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedin:boolean=true;

  constructor(private store:StorageService , private router:Router,
    private show:HeadershowhideService) { }

    /*Need to sort the signin */

  ngOnInit(): void {

  }


  logout()
  {
    this.store.removeToken();
    this.router.navigate(['/signin']);
  }



}
