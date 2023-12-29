import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InsertService {

  constructor(private http:HttpClient) { }
  url50="http://localhost:8080/fees"
  url51="http://localhost:8080/fees/id"
  

  addFees(data:any){
    return this.http.post(this.url50, data);
  }
  viewFees(){
    return this.http.get(this.url51);
  }
}
