import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Timetable } from './timetable';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {

  private baseURL="http://localhost:8084/api/timetables";
  constructor( private httpClient:HttpClient) { }
  getTimetableList():Observable<Timetable[]>
  {
    return this.httpClient.get<Timetable[]>(`${this.baseURL}`);
}
addTimetable(timetable:Timetable):Observable<Object>
{
  return this.httpClient.post(`${this.baseURL}`,timetable);
}
getTimetableById(id:number):Observable<Timetable>
{
  return this.httpClient.get<Timetable>(`${this.baseURL}/${id}`);
}
updateTimetable(id:number,timetable:Timetable):Observable<Object>
{
  return this.httpClient.put(`${this.baseURL}/${id}`,timetable);
}
deleteTimetable(id:number):Observable<Object>
{
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}
}
