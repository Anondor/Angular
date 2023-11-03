import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  login:FormGroup|any;
  
  constructor( private http:HttpClient, private _route:Router, private apiService:ApiService) {}

  ngOnInit(): void {
    this.login=new FormGroup({
      'email':new FormControl(),
      'password':new FormControl()
    })
  }

  logindata(login:FormGroup)
  {
    console.log("TEst file: "+login.value.email)
      this.http.get<any>("http://localhost:3000/signup").subscribe(res=>{
        const user=res.find((a:any)=>{
          return a.email===this.login.value.email && a.password=== this.login.value.password
        });

        if(user)
        {
          alert("you are successfully login");
          this.login.reset();
          this.apiService.islogin=true;  
          this.apiService.userName=user.email;   
          
          this._route.navigate(['home'])
        } else{
          alert("user not Found");
          this._route.navigate(['login'])
        }

      },err=>{
        alert("something was wrong")
      }
      )
  }

}
