import { Component, OnInit } from '@angular/core';
import { StaffservicesService } from 'src/app/staffservices.service';

@Component({
  selector: 'app-staffhome',
  templateUrl: './staffhome.component.html',
  styleUrls: ['./staffhome.component.scss']
})
export class StaffhomeComponent implements OnInit{
  staffarray: any;
  students_count:any;
  unread_messages: any;
  constructor(private service:StaffservicesService){}
  ngOnInit(): void {
    const loginid = localStorage.getItem('loginid')
    console.log(loginid)
    this.service.getstaffdetailes(loginid).subscribe((response:any)=>{
      this.staffarray = response
    })

    const staffid = localStorage.getItem('staffid')
    this.service.getcount(staffid).subscribe((response:any)=>{
      
      this.students_count = response.students_count
      this.unread_messages = response.unread_message
      

      console.log(response)
    })
    
  }


}
