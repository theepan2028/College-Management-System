import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

 /* baseURL="http://localhost:8084/api/students";
  constructor(private httpcllient:HttpClient) { }
 public getStudentList():Observable<Student[]>
  {
    return this.httpcllient.get<Student[]>('${this.baseURL}');
  }
  
  public createStudent(student:Student):Observable<Object>
  {
    return this.httpcllient.post('${this.baseURL}',student);
  }
  public getStudentById(id:number):Observable<Student>
  {
    return this.httpcllient.get<Student>('${this.baseURL}/${id}');
  }
  public updateStudent(id:number,student:Student):Observable<Object>
  {
    return this.httpcllient.put('${this.baseURL}/${id}',student);
  }
  public deleteStudent(id:number):Observable<Object>
  {
    return this.httpcllient.delete('${this.baseURL}/${id}');
  }

  addStudent(student:Student):Observable<Object>
  {
    console.log(student);
    return this.httpcllient.post('${this.baseURL}',student);
  }
 getStudents():Observable<Student[]>
  {
    return this.httpcllient.get<Student[]>('${this.baseURL}');
  }*/
  private baseURL="http://localhost:8084/api/students";
constructor( private httpClient:HttpClient) { }
getStudentList():Observable<Student[]>
{
  return this.httpClient.get<Student[]>(`${this.baseURL}`);
}
addStudent(student:Student):Observable<Object>
{
return this.httpClient.post(`${this.baseURL}`,student);
}
getStudentById(id:number):Observable<Student>
{
return this.httpClient.get<Student>(`${this.baseURL}/${id}`);
}
updateStudent(id:number,student:Student):Observable<Object>
{
return this.httpClient.put(`${this.baseURL}/${id}`,student);
}
deleteStudent(id:number):Observable<Object>
{
return this.httpClient.delete(`${this.baseURL}/${id}`);
}
updateStudentData(student:Student):Observable<Student>
{
return this.httpClient.post<Student>(`${this.baseURL}`,student);
}
}  

 /* saveStudent(student: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }

  getStudent(): string {
    return sessionStorage.getItem(USERNAME_KEY);
  }

  signOut() {
    window.sessionStorage.clear();
  }*/

