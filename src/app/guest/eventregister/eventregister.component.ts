import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AdminservicesService } from 'src/app/adminservices.service';

@Component({
  selector: 'app-eventregister',
  templateUrl: './eventregister.component.html',
  styleUrls: ['./eventregister.component.scss']
})
export class EventregisterComponent implements OnInit{
  eventid: any;
  eventsarray: any[]=[];
  constructor (private services : AdminservicesService,private route :ActivatedRoute){
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.eventid = params.get('id')
    })
  }
  ngOnInit(): void {
    this.services.geteventsbyid(this.eventid).subscribe((response:any)=>{
      this.eventsarray = response
    })
  }

}
