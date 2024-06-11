import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

 // projecData:any;
  constructor(private _HttpClient:HttpClient, private _Router:Router) { }

  getAllProjects():Observable<any>
  {
    return this._HttpClient.get(`https://localhost:44377/api/project`);
  }

  postProject(projecData:any):Observable<any>
  {
    console.log(projecData);
    return this._HttpClient.post(`https://localhost:44377/api/project`,projecData)
  }
  
}
