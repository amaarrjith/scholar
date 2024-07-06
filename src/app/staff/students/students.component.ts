import { Component, OnInit } from '@angular/core';
import { StaffservicesService } from 'src/app/staffservices.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit{
  studentarray: any[]=[];
  constructor(private services:StaffservicesService){}
  ngOnInit(): void {
    const staffid = localStorage.getItem('staffid')
    this.services.getstudentforstaff(staffid).subscribe((response:any)=>{
      this.studentarray = response
    })
    
  }

}
