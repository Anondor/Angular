import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private _route:Router,private apiService:ApiService) {}
  get islogin(){
    return this.apiService.islogin;
  }

  get userName(){
    return this.apiService.userName;
  }

  ResetLogin()
  {
    this.apiService.islogin=false;
    this._route.navigate(['menu'])
  }

  ngOnInit(): void {


  }

  

}
