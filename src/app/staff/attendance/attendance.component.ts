import { Component, OnInit } from '@angular/core';
import { StaffservicesService } from 'src/app/staffservices.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit{
  studentarray: any[]=[];
  attendancehistory: any[]=[];
  constructor(private services:StaffservicesService){}
  ngOnInit(): void {
    const staffid = localStorage.getItem('staffid')
    this.services.getstudentforstaff(staffid).subscribe((response:any)=>{
      this.studentarray = response
      console.log(response)
    })
    this.services.attendancehistory().subscribe((response:any)=>{
      this.attendancehistory = response
      console.log(response)
    })
  }

  present(id:number){
    this.services.present(id).subscribe(response=>{
    alert("Attendance Marked")
    location.reload()
    
    })


  }

  absent(id:number){
    this.services.absent(id).subscribe(response=>{
    alert("Attendance Marked")
    location.reload()
    
    })
    

  }

}
