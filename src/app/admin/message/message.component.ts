import { Component, OnInit } from '@angular/core';
import { AdminservicesService } from 'src/app/adminservices.service';
import { GuestservicesService } from 'src/app/guestservices.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit{
  messagearray: any[]=[];
  constructor(private services:AdminservicesService){}
  ngOnInit(): void {
   this.services.getmessage().subscribe((response:any)=>{
    this.messagearray = response
   })
  }
  delete(id:number){
    this.services.deletemessage(id).subscribe(response=>{
      alert("Message Deleted Successfully")
      location.reload()
    })
  }
}
