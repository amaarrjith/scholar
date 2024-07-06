import { Component, OnInit } from '@angular/core';
import { StudentservicesService } from 'src/app/studentservices.service';

@Component({
  selector: 'app-studentattendance',
  templateUrl: './studentattendance.component.html',
  styleUrls: ['./studentattendance.component.scss']
})
export class StudentattendanceComponent implements OnInit{
  attendance_percentage: any;
  attendancehistory: any[]=[];
  totaldays: any;
  presentdays: any;
  ID: any;
  attendancedate: any[]=[];
  constructor(private service:StudentservicesService){}
  input = {
    fromDate:'',
    toDate:''
  }
  ngOnInit(): void {
    const ID = localStorage.getItem('loginid')
    this.service.attendance(ID).subscribe((response:any)=>{
      this.attendance_percentage = response.attendance_percentage
      this.totaldays = response.totaldays
      this.presentdays = response.presentdays
      console.log(this.attendance_percentage)

   })

   this.service.attendancehistory(ID).subscribe((response:any)=>{
    this.attendancehistory = response
    console.log(this.attendancehistory)
    
   })
  
  }

  submit(){
    this.ID = localStorage.getItem('loginid')
    const InputForm = new FormData()
    InputForm.append('fromDate',this.input.fromDate)
    InputForm.append('toDate',this.input.toDate)
    InputForm.append('ID',this.ID)
    this.service.attendancedate(InputForm).subscribe((response:any)=>{
      this.attendancehistory = response
      console.log(this.attendancehistory)
    })
  }

  refresh(){
    location.reload()
  }

}
