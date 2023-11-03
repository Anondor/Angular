import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { datamodel } from '../home/model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  public dataId!:number;
  public employee!:datamodel ;
  constructor(private activatedroute:ActivatedRoute, private router:Router,private api:ApiService){}


  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((param:Params)=>{
      this.dataId=param['get']("id");
    //  console.log("data Id is",this.dataId);
    }) 
   
    this.api.fetchdata(this.dataId).subscribe((data:datamodel)=>{
      this.employee=data 
     

    }) 


  }
  update()
  {
     this.api.updateemployee(this.dataId,this.employee).subscribe((res:datamodel)=>
     {
      this.router.navigate(["/"]);
     })
  }

}
