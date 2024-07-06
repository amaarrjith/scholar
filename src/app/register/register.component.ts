import { Component, OnInit } from '@angular/core';
import { GuestservicesService } from '../guestservices.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  array: any[]=[];
  locationarray: any[]=[];
  coursearray: any[]=[];
  subjectarray: any[]=[];
  subjectid: any;
  courseid: any;
  studentid: any;
  

  constructor(private services:GuestservicesService,private route :ActivatedRoute,private router:Router){
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.subjectid = params.get('subjectid')
      this.courseid = params.get('courseid')
      console.log(this.subjectid,this.courseid)
    })
  }

  Students = {
    Firstname:'',
    Lastname:'',
    email:'',
    contact:'',
    district:'',
    state:'',
    address:'',
    pincode:'',
    course:'',
    subject:'',
    birthday:'',
    username:'',
    password:'',

  }
  ngOnInit(): void {
   this.services.getdistrict().subscribe((response:any)=>{
    this.array = response
    console.log(this.array)
  })

  this.services.getcourses().subscribe((response:any)=>{
    this.coursearray = response
      
  })

    

    
   
  }

  submit(){
    const StudentForm = new FormData()
    StudentForm.append('firstname',this.Students.Firstname)
    StudentForm.append('lastname',this.Students.Lastname)
    StudentForm.append('email',this.Students.email)
    StudentForm.append('contact',this.Students.contact)
    StudentForm.append('dob',this.Students.birthday)
    StudentForm.append('district',this.Students.district)
    StudentForm.append('state',this.Students.state)
    StudentForm.append('address',this.Students.address)
    StudentForm.append('pincode',this.Students.pincode)
    StudentForm.append('course',this.Students.course)
    StudentForm.append('subject',this.Students.subject)
    StudentForm.append('username',this.Students.username)
    StudentForm.append('password',this.Students.password)
    this.services.StudentRegister(StudentForm).subscribe((response:any)=>{
      this.studentid = response.studentid
      console.log(this.studentid)
      localStorage['setItem']('studentid',this.studentid);
      
      this.router.navigate(['/choosefee'], { queryParams: { subject: this.Students.subject } });
    });
    
    
  }

  onchange(){
    const stateid = this.Students.state
    this.services.getlocation(stateid).subscribe((response:any)=>{
      console.log(response)
      this.locationarray = response
      
    })
    
  }

  change(){
    const courseid = this.Students.course
    this.services.getsubject(courseid).subscribe(response=>{
      this.subjectarray = response
      console.log(this.subjectarray)

    })
  }

}
