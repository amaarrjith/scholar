import { Component, OnInit } from '@angular/core';
import { GuestservicesService } from '../guestservices.service';

@Component({
  selector: 'app-otpverification',
  templateUrl: './otpverification.component.html',
  styleUrls: ['./otpverification.component.scss']
})
export class OtpverificationComponent implements OnInit{
  studentid: any
  otpnumber: any;
  otpindata: any;
  constructor(private service : GuestservicesService){}
  otp = {
    number:''
  }
  ngOnInit(): void {
    
  }
  submit(){
    this.studentid = localStorage.getItem('studentid')
    const Form = new FormData()
    Form.append('otp',this.otp.number)
    this.service.otpdone(this.studentid,Form).subscribe((response:any)=>{
      this.otpnumber = response.otpnumber
      this.otpindata = response.otpindata
      console.log(response)
      if (this.otpnumber === this.otpindata){
        alert("OTP Verification Done")
        window.location.href="/guestchangepassword"
      }
      else {
        alert("OTP Verification Failed")
      }
      
    })
  }

  home(){
    this.studentid = localStorage.getItem('studentid')
    this.service.deleteotp(this.studentid).subscribe(response=>{
      localStorage.clear()
      window.location.href="/guestmaster/guesthome"
    })
    
  }
}
