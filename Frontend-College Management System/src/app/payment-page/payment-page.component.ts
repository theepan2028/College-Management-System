import { Component, OnInit } from '@angular/core';
import { FeesService } from '../fees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent {
 fees: any = {}; 

  constructor(private feesService: FeesService,private router:Router) {}

  ngOnInit(): void {
    
  }
  saveFees() {
    // Additional client-side validation can be added here

    // Send payment details to the backend
  
      this.feesService['createFees'](this.fees).subscribe((data: any)=>
      {
        console.log(data);
        alert("Fees payed Successfully");
        this.goToFeesList();
      },
      (error:any)=>console.log(error)
      );
  
    }
    goToFeesList()
  {
    this.router.navigate(['/feess']);
  }
    //onSubmit()
    submitPayment()
    {
      console.log(this.fees);
      this.saveFees();
    }
}