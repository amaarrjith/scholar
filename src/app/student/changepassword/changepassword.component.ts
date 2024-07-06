import { Component, OnInit } from '@angular/core';
import { StudentservicesService } from 'src/app/studentservices.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit{
  dataarray: any[]=[];
  checkpasswordarray: any[]=[];
  success: any;
  failure: any;
  constructor(private service:StudentservicesService){}
  Changepassword = {
    currentpassword:'',
    newpassword:'',
    retypepass:''

  }
  ngOnInit(): void {
    
  }
  submit(){
    const ID = localStorage.getItem('loginid')
    const ChangepasswordForm = new FormData()
    ChangepasswordForm.append('currentpassword',this.Changepassword.currentpassword)
    ChangepasswordForm.append('newpassword',this.Changepassword.newpassword)
    ChangepasswordForm.append('retypepass',this.Changepassword.retypepass)
    this.service.changepassword(ID,ChangepasswordForm).subscribe((response:any)=>{
      if(response.success){
        alert("Password Changed Sucessfully")
        window.location.href = "/studentmaster/studentedit"
      }

      else if(response.password){
        alert("Check Current Password")
      }

      else if(response.retype){
        alert("New Password and Re-Type Password Not Match")
      }
     

    })
  }
  check(){
    const ID = localStorage.getItem('loginid')
    const CheckForm = new FormData()
    CheckForm.append('currentpassword',this.Changepassword.currentpassword)
    this.service.checkform(ID,CheckForm).subscribe((responses:any)=>{
      this.success = responses.success
      this.failure = responses.fail
    })
  }
}
