import { Component, OnInit } from '@angular/core';
import { AdminservicesService } from 'src/app/adminservices.service';

@Component({
  selector: 'app-events-student',
  templateUrl: './events-student.component.html',
  styleUrls: ['./events-student.component.scss']
})
export class EventsStudentComponent implements OnInit{
  eventarray: any[]=[];
  constructor(private services:AdminservicesService){}
  ngOnInit(): void {
    this.services.getevents().subscribe((response:any)=>{
      this.eventarray = response
    })
  }
}
