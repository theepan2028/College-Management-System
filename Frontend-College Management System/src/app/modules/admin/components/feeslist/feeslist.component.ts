import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fees } from 'src/app/fees';
import { FeesService } from 'src/app/fees.service';

@Component({
  selector: 'app-feeslist',
  templateUrl: './feeslist.component.html',
  styleUrls: ['./feeslist.component.css']
})
export class FeeslistComponent implements OnInit {
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
