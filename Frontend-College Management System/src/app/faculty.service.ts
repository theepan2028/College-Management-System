import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Faculty } from './faculty';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

 

  
  
  private baseURL="http://localhost:8084/api/facultys";
  constructor( private httpClient:HttpClient) { }
  getFacultyList():Observable<Faculty[]>
  {
    return this.httpClient.get<Faculty[]>(`${this.baseURL}`);
}
addFaculty(faculty:Faculty):Observable<Object>
{
  return this.httpClient.post(`${this.baseURL}`,faculty);
}
getFacultyById(id:number):Observable<Faculty>
{
  return this.httpClient.get<Faculty>(`${this.baseURL}/${id}`);
}
updateFaculty(id:number,faculty:Faculty):Observable<Object>
{
  return this.httpClient.put(`${this.baseURL}/${id}`,faculty);
}
deleteFaculty(id:number):Observable<Object>
{
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}
  
}
