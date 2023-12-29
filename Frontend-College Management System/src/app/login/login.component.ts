import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string="";
  password:string="";
  constructor(private router:Router,private http:HttpClient){}
  login()
  {
    console.log(this.email);
    console.log(this.password);
    let bodyData=
    {
      email:this.email,
      password:this.password
    };
  
  /*this.http.post("http://localhost:8080/api/customers/login",bodyData).subscribe((resultData:any)=>*/
  this.http.post("http://localhost:8084/api/studentdetails/login",bodyData).subscribe((resultData:any)=>
  {
    console.log(resultData);
    if(resultData.message=="Email Not Exist")
    {
      alert("Email Not Exist");
    }
    else if(resultData.message=="Login Success")
    {
      //this.router.navigateByUrl('/studentboard');
      this.router.navigateByUrl('/home');
    }
    else{
      alert("Incorrect Email and Password");
    }
  })
  }



 
  /*facultylogin()
  {
    console.log(this.email);
    console.log(this.password);
    let bodyData=
    {
      email:this.email,
      password:this.password
    };

  this.http.post("http://localhost:8084/api/facultydetails/login",bodyData).subscribe((resultData:any)=>
  {
    console.log(resultData);
    if(resultData.message=="Email Not Exist")
    {
      alert("Email Not Exist");
    }
    else if(resultData.message=="Login Success")
    {
      //this.router.navigateByUrl('/studentboard');
      this.router.navigateByUrl('/home');
    }
    else{
      alert("Incorrect Email and Password");
    }
  })
  }*/

  adminLogin(){
    this.router.navigateByUrl('admin');
  }
  goToLogin()
  {

    this.router.navigate(['/home1']);
  }
}
