import { Component, OnInit } from '@angular/core';
import { GuestservicesService } from '../guestservices.service';

@Component({
  selector: 'app-guestchangepassword',
  templateUrl: './guestchangepassword.component.html',
  styleUrls: ['./guestchangepassword.component.scss']
})
export class GuestchangepasswordComponent implements OnInit{
  studentid: any;
  constructor(private service :GuestservicesService){}
  Changepassword = {
    newpassword:'',
    retypepass:''
  }
  ngOnInit(): void {
    
  }
  submit(){
    if(this.Changepassword.newpassword === this.Changepassword.retypepass){
      this.studentid = localStorage.getItem('studentid')
      const NewForm = new FormData()
      NewForm.append('newpass',this.Changepassword.newpassword)
      NewForm.append('retype',this.Changepassword.retypepass)
      this.service.changepassword(this.studentid,NewForm).subscribe(reponse=>{
        alert("Password Changed Successfully")
        window.location.href="/guestmaster/guesthome"
      })
    }
    else{
      alert("Password Mis-Match")
    }
  }

  clear(){
    localStorage.clear()
  }
}
