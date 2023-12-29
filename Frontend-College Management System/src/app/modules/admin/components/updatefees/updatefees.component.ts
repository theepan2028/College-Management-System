import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fees } from 'src/app/fees';
import { FeesService } from 'src/app/fees.service';

@Component({
  selector: 'app-updatefees',
  templateUrl: './updatefees.component.html',
  styleUrls: ['./updatefees.component.css']
})
export class UpdatefeesComponent implements OnInit {
  id!:number;
  fees:Fees=new Fees();
  constructor(private feesService:FeesService,private route:ActivatedRoute,private router:Router)
{}
ngOnInit(): void {
  this.id=this.route.snapshot.params['id'];
  this.feesService['getFeesById'](this.id).subscribe((data:Fees)=>
  {
    this.fees=data;
  },(error:any)=>console.log(error));
  }
  onSubmit()
  {
    this.feesService['updateFees'](this.id,this.fees).subscribe((data:any)=>{
      alert("Updated successfully")
      this.goToFeesList();
    },(error:any)=>console.log(error));
  
  }

  goToFeesList()
  {
    this.router.navigate(['/feess']);
  } 

}
