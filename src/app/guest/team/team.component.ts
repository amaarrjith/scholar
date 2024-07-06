import { Component, OnInit } from '@angular/core';
import { AdminservicesService } from 'src/app/adminservices.service';
import { GuestservicesService } from 'src/app/guestservices.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit{
  staffarray: any[]=[];
  constructor(private service:AdminservicesService){}
  ngOnInit(): void {
    this.service.getstaff().subscribe((response:any)=>{
      this.staffarray = response
      console.log(this.staffarray)
    })
  }

}
