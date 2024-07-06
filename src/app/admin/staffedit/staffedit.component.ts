import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AdminservicesService } from 'src/app/adminservices.service';
import { GuestservicesService } from 'src/app/guestservices.service';

@Component({
  selector: 'app-staffedit',
  templateUrl: './staffedit.component.html',
  styleUrls: ['./staffedit.component.scss']
})
export class StaffeditComponent implements OnInit{
  staffarray: any;
  staffid: any;
  
  Staff = {
    firstname : '',
    lastname : '',
    email:'',
    contactno :'',
    course:'',
    qualification : '',
    year : '',
    gender : '',
    username : '',
    password : '',
    subject:'',
  
  }
  coursearray: any[]=[];
  courseId: any;
  courseid: any;
  subjectarray: any[]=[];
  
  constructor (private services:AdminservicesService,private route:ActivatedRoute,private service:GuestservicesService){
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.staffid = params.get('id')
    })

  }

  

  ngOnInit(): void {

  this.services.getstaffbyid(this.staffid).subscribe(response=>{
    this.staffarray = response
    this.courseId = this.staffarray[0].courseId
    console.log(this.courseId)
    console.log(this.staffarray)
    this.Staff = {
      firstname:this.staffarray[0].firstname,
      lastname:this.staffarray[0].lastname,
      email:this.staffarray[0].email,
      contactno:this.staffarray[0].contactno,
      course:this.staffarray[0].course,
      qualification:this.staffarray[0].qualification,
      year:this.staffarray[0].experience, 
      gender:this.staffarray[0].gender,
      username:this.staffarray[0].username,
      password:this.staffarray[0].password,
      subject:this.staffarray[0].subjectname
    }
    
  })

  this.services.getcourses().subscribe((response:any)=>{
    this.coursearray = response
    console.log(this.coursearray)
  })


  }
  submit(){
    const UpdatedForm = new FormData()
    UpdatedForm.append('firstname',this.Staff.firstname)
    UpdatedForm.append('lastname',this.Staff.lastname)
    UpdatedForm.append('email',this.Staff.email)
    UpdatedForm.append('contactno',this.Staff.contactno)
    UpdatedForm.append('course',this.Staff.course)
    UpdatedForm.append('qualification',this.Staff.qualification)
    UpdatedForm.append('year',this.Staff.year)
    UpdatedForm.append('gender',this.Staff.gender)
    UpdatedForm.append('username',this.Staff.username)
    UpdatedForm.append('password',this.Staff.password)
    UpdatedForm.append('subject',this.Staff.subject)
    this.services.staffupdate(UpdatedForm,this.staffid).subscribe(response=>{
      alert("Edited Sucessfully")
      window.location.href="/adminmaster/staffview"
    })
  }
  onchange(){
    this.courseid = this.Staff.course
    console.log(this.courseid)
    this.service.getsubject(this.courseid).subscribe((response:any)=>{
      this.subjectarray = response
      console.log(this.subjectarray)
    })

  }
}
