import { Component, OnInit } from '@angular/core';
import { StudentservicesService } from 'src/app/studentservices.service';

@Component({
  selector: 'app-editpage',
  templateUrl: './editpage.component.html',
  styleUrls: ['./editpage.component.scss']
})
export class EditpageComponent implements OnInit{

  Update = {
    email:'',
    dob:'',
    mobile:'',
    username:'',
  }

  studentarray: any[]=[];
  getdata: any;
  constructor(private service:StudentservicesService){}
  
  ngOnInit(): void {

    const ID = localStorage.getItem('loginid')
    this.service.getstudent(ID).subscribe((response:any)=>{
      this.studentarray = response
      this.getdata = response
      console.log(this.getdata)
      this.Update = {
        email:this.getdata[0].email,
        dob:this.getdata[0].dob,
        mobile:this.getdata[0].contactno,
        username:this.getdata[0].username
      }

      

    })
  }
  submit(){

    const ID = localStorage.getItem('loginid')
    const UpdateForm = new FormData()

    UpdateForm.append('email',this.Update.email)
    UpdateForm.append('dob',this.Update.dob)
    UpdateForm.append('mobile',this.Update.mobile)
    UpdateForm.append('username',this.Update.username)

    this.service.updateprofile(ID,UpdateForm).subscribe(response=>{
      alert("Profile Updated Sucessfully")
      window.location.href = "/studentmaster/studentedit"

    })
  }
}