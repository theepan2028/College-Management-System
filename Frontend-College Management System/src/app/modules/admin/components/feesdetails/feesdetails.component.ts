import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fees } from 'src/app/fees';
import { FeesService } from 'src/app/fees.service';


@Component({
  selector: 'app-feesdetails',
  templateUrl: './feesdetails.component.html',
  styleUrls: ['./feesdetails.component.css']
})
export class FeesdetailsComponent implements OnInit {
id!:number;
  fees!:Fees;
  constructor(private learnerService:FeesService,private route:ActivatedRoute)
  {}
  ngOnInit(): void{
    this.id=this.route.snapshot.params['id'];
    this.fees=new Fees();
    this.learnerService['getFeesById'](this.id).subscribe((data:Fees)=>
    {
      this.fees=data;
    });
}
}
