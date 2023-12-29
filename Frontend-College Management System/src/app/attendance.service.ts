import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Attendance } from './attendance';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  private baseURL="http://localhost:8084/api/attendances";
  constructor( private httpClient:HttpClient) { }
  getAttendanceList():Observable<Attendance[]>
  {
    return this.httpClient.get<Attendance[]>(`${this.baseURL}`);
}
addAttendance(attendance:Attendance):Observable<Object>
{
  return this.httpClient.post(`${this.baseURL}`,attendance);
}
getAttendanceById(id:number):Observable<Attendance>
{
  return this.httpClient.get<Attendance>(`${this.baseURL}/${id}`);
}
updateAttendance(id:number,attendance:Attendance):Observable<Object>
{
  return this.httpClient.put(`${this.baseURL}/${id}`,attendance);
}
deleteAttendance(id:number):Observable<Object>
{
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}
}
