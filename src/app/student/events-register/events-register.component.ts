import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AdminservicesService } from 'src/app/adminservices.service';
import { StudentservicesService } from 'src/app/studentservices.service';

@Component({
  selector: 'app-events-register',
  templateUrl: './events-register.component.html',
  styleUrls: ['./events-register.component.scss']
})
export class EventsRegisterComponent implements OnInit{
  
  Events = {

      name: '',
      email:'',
      phone:'',
      event:'',
    
    }

  eventid: any;
  getdata: any;
  studentarray: any[]=[];
  eventsarray: any[]=[];
  
  constructor(private route:ActivatedRoute,private service:AdminservicesService,private services:StudentservicesService){
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.eventid = params.get('id')
    })
  }
  
  ngOnInit(): void {
    this.service.geteventsbyid(this.eventid).subscribe((response:any)=>{
      this.eventsarray = response
    })
    const ID = localStorage.getItem('loginid')
    this.services.getstudent(ID).subscribe((response:any)=>{
      this.studentarray = response
      console.log(this.studentarray[0].student_firstname)
      this.Events = {
        name: this.studentarray[0].student_firstname + ' ' + this.studentarray[0].student_lastname,
        email:this.studentarray[0].email,
        phone:this.studentarray[0].contactno,
        event:this.eventsarray[0].eventname
  
      }
    })
    

    


  }
  submit(){
    const eventsubmitform = new FormData()
    eventsubmitform.append('name',this.Events.name)
    eventsubmitform.append('email',this.Events.email)
    eventsubmitform.append('phone',this.Events.phone)
    eventsubmitform.append('event',this.Events.event)
    this.services.submitevent(eventsubmitform).subscribe(response=>{
      alert('Event Registration Done')
      window.location.href = "/studentmaster/students_events"
    })
  }
}
