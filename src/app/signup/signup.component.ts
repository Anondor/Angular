import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { datamodel } from '../home/model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  data:undefined|datamodel;
  signupForm:FormGroup;

  constructor(private _route:Router, private api:ApiService){  }

  ngOnInit(): void {
    
    this.signupForm = new FormGroup({
      'id':new FormControl(),
      'firstName':new FormControl(),
      'lastName':new FormControl(),
      'email':new FormControl(),
      'phone':new FormControl(),
      'password':new FormControl()
    }); 
  }


  // sign up process

  signupdata()
  {
   
    console.log(this.signupForm.value);
  this.api.addemployee(this.signupForm.value).subscribe((res=>
    {  
      //debugger
      this.signupForm.reset();
     this._route.navigate(['login']);
    }
    ))
        
  }


}
