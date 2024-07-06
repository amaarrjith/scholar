import { Component, OnInit } from '@angular/core';
import { AdminservicesService } from 'src/app/adminservices.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit{
  coursearray: any[]=[];
  staffarray: any[]=[];
  constructor(private services:AdminservicesService){}

  Course = {
    name :'',
    description:''
  }
  Subject = {
    courseid : '',
    subjectname:'',
    subjectduration:'',
    subjectfees:'',
    staff : '',
    description: ''
  }
  ngOnInit(): void {

    this.services.getcourses().subscribe((response:any)=>{
      this.coursearray = response}
    
    )

    this.services.getstaff().subscribe((response:any)=>{
      this.staffarray = response
    })
  
  }



  csubmit(){
    const CourseForm = new FormData()
    CourseForm.append('name',this.Course.name)
    CourseForm.append('description',this.Course.description)
    this.services.course(CourseForm).subscribe(response=>{
      alert("Course Added Sucessfully")
      location.reload()
    })
  }

  ssubmit(){
    const SubjectForm = new FormData()
    SubjectForm.append('courseid',this.Subject.courseid)
    SubjectForm.append('subjectname',this.Subject.subjectname)
    SubjectForm.append('fees',this.Subject.subjectfees)
    SubjectForm.append('duration',this.Subject.subjectduration)
    SubjectForm.append('staff',this.Subject.staff)
    SubjectForm.append('description',this.Subject.description)
    this.services.subject(SubjectForm).subscribe(response=>{
      alert ("Subject Registration Done")
      location.reload()
    })
  }
}
