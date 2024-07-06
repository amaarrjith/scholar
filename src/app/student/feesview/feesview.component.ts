import { Component, OnInit } from '@angular/core';
import { StudentservicesService } from 'src/app/studentservices.service';

@Component({
  selector: 'app-feesview',
  templateUrl: './feesview.component.html',
  styleUrls: ['./feesview.component.scss']
})
export class FeesviewComponent implements OnInit{
  feesreportarray: any[]=[];
  fees: any;
  feespaid: any;
  paid_percentage: any;
  constructor(private services :StudentservicesService){}
  ngOnInit(): void {
    const loginid = localStorage.getItem('loginid')
    this.services.feesreport(loginid).subscribe((response:any)=>{
      this.feesreportarray = response
    })

    this.services.getfeesbystudentid(loginid).subscribe((response:any)=>{
      this.fees = response[0].fees
      console.log(response)
    })

    this.services.feespaid(loginid).subscribe((response:any)=>{
      this.feespaid = response.fees_paid
      this.paid_percentage = response.percentage
    })

    
  }

}
