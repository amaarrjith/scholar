import { Component, OnInit } from '@angular/core';
import { StaffservicesService } from 'src/app/staffservices.service';

@Component({
  selector: 'app-staffmaster',
  templateUrl: './staffmaster.component.html',
  styleUrls: ['./staffmaster.component.scss']
})

export class StaffmasterComponent implements OnInit{
  unread_messages: any;
  constructor(private services:StaffservicesService){}
  ngOnInit(): void {
    const staffid = localStorage.getItem('staffid')
    this.services.getcount(staffid).subscribe((response:any)=>{
      
      
      this.unread_messages = response.unread_message
      

      console.log(response)
    })
  }

  logout(){
    localStorage.clear()
    this.services.logout().subscribe(response=>{
      
      window.location.href="/guestmaster/guesthome"
    })

  }
  
}
