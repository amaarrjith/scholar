import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuestservicesService } from 'src/app/guestservices.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  studentlist: any;

  constructor(private services:GuestservicesService,private router:Router){}

  Login = {
    username:'',
    password:''
  }
  ngOnInit(): void {
    
  }
  submit(){
    const Login = new FormData()
    Login.append('username',this.Login.username)
    Login.append('password',this.Login.password)
    this.services.login(Login).subscribe(response=>{
      this.studentlist = response.studentlist
      console.log(this.studentlist)
      
      if (response.success){
        const loginid = response.loginid
        
        localStorage.setItem('loginid',loginid)
        window.location.href = "/studentmaster/studenthome"
        
      }
      else if (response.admin){
        
        window.location.href = "/adminmaster/adminhome"
        console.log("Hi")
      }

      else if (response.staff){
        const loginid = response.loginid
        const staffid = response.staffid
        localStorage.setItem('loginid',loginid)
        localStorage.setItem('staffid',staffid)
        window.location.href = "staffmaster/staffhome"
      }

      else if (response.active){
        
        
        alert("Contact Admin To Activate Profile")
      }

      else{
        alert("Check Username or Password")
      }

      
      }

    )
  }
}

