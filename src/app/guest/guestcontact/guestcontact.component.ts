import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subject } from 'rxjs';
import { AdminservicesService } from 'src/app/adminservices.service';
import { GuestservicesService } from 'src/app/guestservices.service';

@Component({
  selector: 'app-guestcontact',
  templateUrl: './guestcontact.component.html',
  styleUrls: ['./guestcontact.component.scss']
})
export class GuestcontactComponent implements OnInit{
  eventid: any;
  eventarray: any[]=[];
  constructor(private service : GuestservicesService,private route : ActivatedRoute , private services :AdminservicesService){
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.eventid = params.get('id')
    })
  }
  Message={
    name:'',
    email:'',
    message:'',
    subject:''
  }
  ngOnInit(): void {
    this.services.geteventsbyid(this.eventid).subscribe((response:any)=>{
      this.eventarray = response
      console.log(this.eventarray)

      this.Message = {
        name:'',
        email:'',
        message:'',
        subject:this.eventarray[0].eventname,
      }
    })
  }

  submit(){

  }
}
