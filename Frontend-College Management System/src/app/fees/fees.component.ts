import { Component, OnInit } from '@angular/core';
import { InsertService } from '../insert.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FeesService } from '../fees.service';
import { Fees } from '../fees';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.css']
})
export class FeesComponent  {
    /*NgForm=NgForm;
      ngOnInit(): void {
      }
    
      constructor(private is:InsertService,private router:Router) {
    
      }
     
     insertdetails(insert:any){
       this.is.addFees(insert.value).subscribe();
       alert('You Have successfully paid your fees');
       window.location.reload();
     }*/
    
      feess!:Fees[];
      constructor(private feesService:FeesService,private router:Router)
      {}
      ngOnInit(): void {
        this.getFeess();
      }
      private getFeess()
      {
        this.feesService.getFeesList().subscribe(data=>
          {
            this.feess=data;
          });
        }
        feesDetails(id:number)
        {
          this.router.navigate(['feesdetails',id]);
        }
        updateFees(id:number)
        {
          this.router.navigate(['updatefees',id]);
        }
        deleteFees(id:number)
        {
          this.feesService.deleteFees(id).subscribe((data:any)=>
            {
              console.log(data);
              this.getFeess();
            })
        }
}
