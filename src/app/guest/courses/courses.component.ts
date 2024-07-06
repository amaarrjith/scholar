import { Component, OnInit } from '@angular/core';
import { AdminservicesService } from 'src/app/adminservices.service';
import { GuestservicesService } from 'src/app/guestservices.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{
  coursearray: any[]=[];
  subjectarray: any[]=[];



  constructor(private services:AdminservicesService,private service:GuestservicesService){}
  ngOnInit(): void {
    this.services.getcourses().subscribe((response:any)=>{
      this.coursearray = response
      console.log(this.coursearray)
    
    })

    this.services.getsubjects().subscribe((response:any)=>{
      this.subjectarray = response
      console.log(this.subjectarray)
    })
  }
  getsubjectbyid(courseid:number){
    this.service.getsubject(courseid).subscribe((response:any)=>{
      this.subjectarray = response
      console.log(this.subjectarray)
    })
  }
  
}
