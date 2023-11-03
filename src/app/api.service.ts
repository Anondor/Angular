import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { datamodel } from './home/model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiurl="http://localhost:3000/signup";

  public islogin:boolean;
  public userName:string;

  
  constructor(private http: HttpClient) { }

    // Add Employee
addemployee( data:datamodel)
{
  debugger
  return this.http.post<datamodel>(`${this.apiurl}`,data);
  
}

// get employee
getemployee()
{
  const userData= this.http.get<datamodel[]>(`${this.apiurl}`);
  return userData;

}

// delete employee
delete(id:number,data:any)
{
  return this.http.delete(`${this.apiurl}/${id}`,data);
}
// fetch data
fetchdata(id:number)
{
  return this.http.get<datamodel>(`${this.apiurl}/${id}`);
}

// update employee

updateemployee(id:number,data:datamodel)
{
      return this.http.put<datamodel>(`${this.apiurl}/${id}`,data);
}



}
