import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GuestservicesService } from 'src/app/guestservices.service';

@Component({
  selector: 'app-choosefee',
  templateUrl: './choosefee.component.html',
  styleUrls: ['./choosefee.component.scss']
})
export class ChoosefeeComponent implements OnInit {
  subject: any;
  subjectarray: any[] = [];
  subjectfees: any;
  termfees: any;
  termfeesorginal: any;

  constructor(private route: ActivatedRoute, private services: GuestservicesService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.subject = params['subject'];
      
    });

    this.services.getsubjectwithsubjectid(this.subject).subscribe((response: any) => {
      this.subjectarray = response;
      this.subjectfees = this.subjectarray[0].fees;
      this.termfees = this.subjectfees / 3;
      let termfees1 = parseFloat(this.termfees);
      this.termfeesorginal = Math.round(termfees1)
      console.log(this.subjectfees);
      console.log(this.termfees);
    });
  }

  redirect(fees:any){
    localStorage.setItem('fees',fees)
    window.location.href="/feepayment"
  }
}
