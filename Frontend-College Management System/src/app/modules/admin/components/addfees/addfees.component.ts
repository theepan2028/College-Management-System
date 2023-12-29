import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fees } from 'src/app/fees';
import { FeesService } from 'src/app/fees.service';

@Component({
  selector: 'app-addfees',
  templateUrl: './addfees.component.html',
  styleUrls: ['./addfees.component.css']
})
export class AddfeesComponent implements OnInit{
  /*fees:Fees=new Fees();
  constructor(private feesService:FeesService,private router:Router)
  {}
  ngOnInit(): void {
    
  }
  saveFees()
  {
    this.feesService['addFees'](this.fees).subscribe((data: any)=>
    {
      console.log(data);
      alert("Fees added Successfully");
      this.goToFeesList();
    },
    (error:any)=>console.log(error)
    );

  }
  goToFeesList()
  {
    this.router.navigate(['/feess']);
  }
  onSubmit()
  {
    console.log(this.fees);
    this.saveFees();
  }

}*/
fees:Fees=new Fees();
  constructor(private feesService:FeesService,private router:Router)
  {}
  ngOnInit(): void {
    
  }
  saveFees()
  {
    this.feesService['createFees'](this.fees).subscribe((data: any)=>
    {
      console.log(data);
      alert("Fees added Successfully");
      this.goToFeesList();
    },
    (error:any)=>console.log(error)
    );

  }
  goToFeesList()
  {
    this.router.navigate(['/feess']);
  }
  onSubmit()
  {
    console.log(this.fees);
    this.saveFees();
  }

}