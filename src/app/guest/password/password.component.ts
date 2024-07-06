import { Component, OnInit } from '@angular/core';
import { StudentservicesService } from 'src/app/studentservices.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit{
  Password = {
    username:''
  }
  studentid: any;
  constructor(private services:StudentservicesService){}
  ngOnInit(): void {




    
  }

  submit(){
    const password = new FormData()
    password.append('username',this.Password.username)
    this.services.forgetpassword(password).subscribe((response:any)=>{
      console.log(response)
      if (response.success === true){

        this.studentid = response.studentid
        localStorage.setItem('studentid',this.studentid)
        window.location.href="/otpverification"
      }
      else if (response.fail === true){
        alert("Email Address Not Found")
      }
    })
  }
}
