//to provide employee data
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../emloyee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
}) 
export class EmployeeService {

  //abhi k liye iss location se data utha rhe 
  private _url: string ="http://localhost:3000/";
  //baad m apne json-server k url deke kr skte 


  constructor(private http: HttpClient) { }

  // getEmployees()
  // {
  //   return [
  //     {"id":1, "name": "Andrew","age": 30},
  //     {"id":2, "name": "Brandon","age": 25},
  //     {"id":3, "name": "Christina","age": 26},
  //     {"id":4, "name": "Elena","age": 28}
  //   ];
  // }
  getEmployees(): Observable<IEmployee[]>
  {
    return this.http.get<IEmployee[]>(this._url + 'employees');
  }

}
