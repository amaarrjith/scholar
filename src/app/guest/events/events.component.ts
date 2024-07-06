import { Component, OnInit } from '@angular/core';
import { AdminservicesService } from 'src/app/adminservices.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit{
  eventarray: any[]=[];
  constructor(private services : AdminservicesService){}
  ngOnInit(): void {
    this.services.getevents().subscribe((response:any)=>{
      this.eventarray = response
    })
  }

}
