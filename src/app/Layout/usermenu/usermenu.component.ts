import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-usermenu',
  templateUrl: './usermenu.component.html',
  styleUrls: ['./usermenu.component.css']
})
export class UsermenuComponent implements OnInit {

  constructor(private store:StorageService , private router:Router) { }

  ngOnInit(): void {
  }

  logout()
  {
    this.store.removeToken();
    this.router.navigate(['/signin']);
  }

}
