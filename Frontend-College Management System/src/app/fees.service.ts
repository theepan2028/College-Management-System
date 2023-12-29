import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fees } from './fees';

@Injectable({
  providedIn: 'root'
})
export class FeesService {

 /* private baseURL="http://localhost:8084/api/feess";
  constructor( private httpClient:HttpClient) { }
  getFeesList():Observable<Fees[]>
  {
    return this.httpClient.get<Fees[]>(`${this.baseURL}`);
}
addFees(fees:Fees):Observable<Object>
{
  return this.httpClient.post(`${this.baseURL}`,fees);
}
getFeesById(id:number):Observable<Fees>
{
  return this.httpClient.get<Fees>(`${this.baseURL}/${id}`);
}
updateFees(id:number,fees:Fees):Observable<Object>
{
  return this.httpClient.put(`${this.baseURL}/${id}`,fees);
}
deleteFees(id:number):Observable<Object>
{
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}*/
private baseURL="http://localhost:8084/api/feess";
constructor( private httpClient:HttpClient) { }
getFeesList():Observable<Fees[]>
{
  return this.httpClient.get<Fees[]>(`${this.baseURL}`);
}
createFees(fees:Fees):Observable<Object>
{
return this.httpClient.post(`${this.baseURL}`,fees);
}
getFeesById(id:number):Observable<Fees>
{
return this.httpClient.get<Fees>(`${this.baseURL}/${id}`);
}
updateFees(id:number,fees:Fees):Observable<Object>
{
return this.httpClient.put(`${this.baseURL}/${id}`,fees);
}
deleteFees(id:number):Observable<Object>
{
return this.httpClient.delete(`${this.baseURL}/${id}`);
} 

processPayment(paymentDetails: any): Observable<any> {
  return this.httpClient.post(`${this.baseURL}/payment`, paymentDetails);
} 
  
  

}
