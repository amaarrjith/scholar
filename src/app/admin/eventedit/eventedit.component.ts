import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AdminservicesService } from 'src/app/adminservices.service';

@Component({
  selector: 'app-eventedit',
  templateUrl: './eventedit.component.html',
  styleUrls: ['./eventedit.component.scss']
})
export class EventeditComponent implements OnInit{
  subjectarray: any[]=[];
  editid:any;
  getdata: any;
  constructor(private services:AdminservicesService,private route:ActivatedRoute){
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.editid = params.get('id')
    })

  }
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

    this.services.geteventsbyid(this.editid).subscribe((response:any)=>{
      this.getdata = response
      console.log(this.getdata)
      this.Events = {
        subjectid:this.getdata[0].subjectid,
        name:this.getdata[0].eventname,
        date:this.getdata[0].date,
        duration:this.getdata[0].duration,
        price:this.getdata[0].price
      }
    })
  }
  submit(){
    const EventForm = new FormData()
    EventForm.append('subjectid',this.Events.subjectid)
    EventForm.append('name',this.Events.name)
    EventForm.append('date',this.Events.date)
    EventForm.append('duration',this.Events.duration)
    EventForm.append('price',this.Events.price)
    this.services.updatevent(this.editid,EventForm).subscribe(response=>{
      alert('Event Updation Done')
      window.location.href="/adminmaster/eventview"
    })
  }
}

