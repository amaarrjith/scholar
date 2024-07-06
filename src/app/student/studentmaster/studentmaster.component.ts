import { Component, OnInit } from '@angular/core';
import { StudentservicesService } from 'src/app/studentservices.service';

@Component({
  selector: 'app-studentmaster',
  templateUrl: './studentmaster.component.html',
  styleUrls: ['./studentmaster.component.scss']
})
export class StudentmasterComponent implements OnInit{
  dataarray: any[]=[];
  student_firstname: any;
  student_lastname: any;
  getstaffarray: any[]=[];

  constructor(private services:StudentservicesService){}
  ngOnInit(): void {
    
    const ID = localStorage.getItem('loginid')
     
    this.services.getstaffforstudent(ID).subscribe((response:any)=>{
      this.getstaffarray = response
      this.student_firstname = this.getstaffarray[0]['student_firstname']
      this.student_lastname = this.getstaffarray[0]['student_lastname']
    })
  }
  logout(){
    const loginid = localStorage.getItem('loginid')
    this.services.studentlogout(loginid).subscribe(response=>{
      localStorage.clear()
      window.location.href="/guestmaster/guesthome"
    })
  }
}
