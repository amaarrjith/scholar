import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AdminservicesService } from 'src/app/adminservices.service';

@Component({
  selector: 'app-subjectedit',
  templateUrl: './subjectedit.component.html',
  styleUrls: ['./subjectedit.component.scss']
})
export class SubjecteditComponent implements OnInit{
  subjectid: any;
  coursearray: any[]=[];
  staffarray: any[]=[];
  subjectarray: any;
  constructor(private services:AdminservicesService,private route:ActivatedRoute){
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.subjectid = params.get('id')
    })
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
    
    this.services.getsubjectwithid(this.subjectid).subscribe((response:any)=>{
      this.subjectarray = response
      console.log(this.subjectarray)
      this.Subject={
        courseid : this.subjectarray[0].courseid,
        subjectname:this.subjectarray[0].subjectname,
        subjectduration:this.subjectarray[0].duration,
        subjectfees:this.subjectarray[0].fees,
        staff : this.subjectarray[0].staffid,
        description:this.subjectarray[0].description
      }
    })
  }
  ssubmit(){
    const UpddateForm = new FormData()
    UpddateForm.append('courseid',this.Subject.courseid)
    UpddateForm.append('subjectname',this.Subject.subjectname)
    UpddateForm.append('subjectduration',this.Subject.subjectduration)
    UpddateForm.append('description',this.Subject.description)
    UpddateForm.append('subjectfees',this.Subject.subjectfees)
    UpddateForm.append('staff',this.Subject.staff)
    this.services.updatesubject(this.subjectid,UpddateForm).subscribe(response=>{
      alert("Subject Updated Successfully")
      window.location.href="adminmaster/subjectview"
    })
  }
}
