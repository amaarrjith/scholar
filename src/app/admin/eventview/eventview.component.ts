import { Component, OnInit } from '@angular/core';
import { AdminservicesService } from 'src/app/adminservices.service';

@Component({
  selector: 'app-eventview',
  templateUrl: './eventview.component.html',
  styleUrls: ['./eventview.component.scss']
})
export class EventviewComponent implements OnInit{
  eventarray: any[]=[];
  constructor(private services :AdminservicesService){}
  ngOnInit(): void {
    this.services.getevents().subscribe((response:any)=>{
      this.eventarray = response
    })
  }
  delete(id:any){
    this.services.deleteevents(id).subscribe(response=>{
      alert('Event Deleted Done')
      location.reload()
    })
  }
}
