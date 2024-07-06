import { Component, OnInit } from '@angular/core';
import { AdminservicesService } from 'src/app/adminservices.service';
import { StudentservicesService } from 'src/app/studentservices.service';

@Component({
  selector: 'app-studenthome',
  templateUrl: './studenthome.component.html',
  styleUrls: ['./studenthome.component.scss']
})
export class StudenthomeComponent implements OnInit{
  Message ={
    name :'',
    email:'',
    message :''
  }
  getstaffarray: any[]=[];
  attendance: any;
  attendance_percentage: any;
  constructor(private adminservice:AdminservicesService,private service : StudentservicesService){}
  ngOnInit(): void {
    
      const ID = localStorage.getItem('loginid')
      
      this.service.getstaffforstudent(ID).subscribe((response:any)=>{
        this.getstaffarray = response
        
        const studentfirstname = this.getstaffarray[0]['student_firstname']
        const studentlastname = this.getstaffarray[0]['student_lastname']
        localStorage.setItem('studentfirstname',studentfirstname)
        localStorage.setItem('studentlastname',studentlastname)
        
      })

      this.service.attendance(ID).subscribe((response:any)=>{
         this.attendance_percentage = response.attendance_percentage
         console.log(this.attendance_percentage)

      })
      
      

      
    }
  
  submit(){
    const MessageForm = new FormData()
    MessageForm.append('name',this.Message.name)
    MessageForm.append('email',this.Message.email)
    MessageForm.append('message',this.Message.message)
    this.adminservice.message(MessageForm).subscribe(response=>{
      alert("Message Sent")
      location.reload()
    })
  }
}
