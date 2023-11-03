import { Component, OnInit } from '@angular/core';
import { datamodel } from './model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  data!:datamodel[] ;
signup!:FormGroup ;
  constructor(private formbuilder:FormBuilder,private api:ApiService){
  }

  ngOnInit(): void {
   this.getemployee();
  }
  getemployee()
  {
    this.api.getemployee().subscribe(res=>{
      this.data=res;

    })
  }
  deleteRow(item:datamodel)
  {
    return this.api.delete(item.id,item).subscribe(res=>
      {
      alert("item delete successfully");
      })
  }

}
