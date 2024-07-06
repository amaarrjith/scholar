import { Component, OnInit } from '@angular/core';
import { AdminservicesService } from 'src/app/adminservices.service';

@Component({
  selector: 'app-addevents',
  templateUrl: './addevents.component.html',
  styleUrls: ['./addevents.component.scss']
})
export class AddeventsComponent implements OnInit{
  subjectarray: any[]=[];
  constructor(private services:AdminservicesService){}
  Events = {
    subjectid : '',
    name:'',
    date :'',
    duration:'',
    price:''

  }
  ngOnInit(): void {
    this.services.getsubjects().subscribe((response:any)=>{
      console.log(response)
      this.subjectarray = response
    })
  }
  submit(){
    const EventForm = new FormData()
    EventForm.append('subjectid',this.Events.subjectid)
    EventForm.append('name',this.Events.name)
    EventForm.append('date',this.Events.date)
    EventForm.append('duration',this.Events.duration)
    EventForm.append('price',this.Events.price)
    this.services.addevent(EventForm).subscribe(response=>{
      alert('Event Registration Done')
      location.reload()
    })
  }
}
