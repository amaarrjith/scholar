import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AdminservicesService } from 'src/app/adminservices.service';
import { GuestservicesService } from 'src/app/guestservices.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit{
  coursearray: any[]=[];
  courseid: any;
  subjectarray: any[]=[];
  constructor(private service:AdminservicesService,private services:GuestservicesService){}

  Staff = {

    firstname : '',
    lastname : '',
    email:'',
    contactno :'',
    
    qualification : '',
    year : '',
    gender : '',
    username : '',
    password : '',
    





  }
  ngOnInit(): void {

    this.service.getcourses().subscribe((response:any)=>{
      this.coursearray = response
      console.log(this.coursearray)
    })
    
  }
  submit(){
    const StaffData = new FormData()
    StaffData.append('firstname',this.Staff.firstname)
    StaffData.append('lastname',this.Staff.lastname)
    StaffData.append('email',this.Staff.email)
    StaffData.append('contactno',this.Staff.contactno)
    
    StaffData.append('qualification',this.Staff.qualification)
    StaffData.append('year',this.Staff.year)
    StaffData.append('gender',this.Staff.gender)
    StaffData.append('username',this.Staff.username)
    StaffData.append('password',this.Staff.password)
    
    this.service.staff(StaffData).subscribe(response =>{
      alert("Staff Registration Done")
      window.location.href="/adminmaster/staffview"
    })
    
    
  }
  
  
}
