import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StudentservicesService {
  
  constructor(private http:HttpClient) { }
  private baseUrl = "http://127.0.0.1:8000/api/"


  studentlogout(studentid:any){
    return this.http.get(`${this.baseUrl}studentlogout/${studentid}`)
  }
  getstaffforstudent(ID:any){
    return this.http.get(`${this.baseUrl}staffgetbystudent/${ID}`)
  }
  attendance(ID:any){
    return this.http.get(`${this.baseUrl}attendance/${ID}`)
  }
  attendancehistory(ID:any){
    return this.http.get(`${this.baseUrl}attendancehistory/${ID}`)
  }
  attendancedate(InputForm:FormData){
    return this.http.post(`${this.baseUrl}attendancedate`,InputForm)
  }
  getstudent(ID:any){
    return this.http.get(`${this.baseUrl}getstudent/${ID}`)
  }

  forgetpassword(password:FormData){
    return this.http.post(`${this.baseUrl}otp`,password)

  }

  updateprofile(ID:any,UpdateForm:FormData){
    return this.http.post(`${this.baseUrl}updateprofile/${ID}`,UpdateForm)
  }

  changepassword(ID:any,ChangepasswordForm:FormData){
    return this.http.post(`${this.baseUrl}changepassword/${ID}`,ChangepasswordForm)
  }
  checkform(ID:any,checkform:FormData){
    return this.http.post(`${this.baseUrl}checkform/${ID}`,checkform)
  }
  sendmessage(ID:any,MessageForm:FormData){
    return this.http.post(`${this.baseUrl}sendmessage/${ID}`,MessageForm)
  }
  viewmessage(ID:any){
    return this.http.get(`${this.baseUrl}sendmessage/${ID}`)
  }
  viewmessagestaff(ID:any){
    return this.http.get(`${this.baseUrl}viewmessagestaff/${ID}`)
  }
  deletemessage(ID:any){
    return this.http.delete(`${this.baseUrl}sendmessage/${ID}`)
  }
  submitevent(eventsubmitform:FormData){
    return this.http.post(`${this.baseUrl}eventsubmitform`,eventsubmitform)
  }
  feesreport(studentid:any){
    return this.http.get(`${this.baseUrl}feesreport/${studentid}`)
  }

  getfeesbystudentid(studentid:any){
    return this.http.get(`${this.baseUrl}getfeesbystudentid/${studentid}`)
  }

  feespaid(studentid:any){
    return this.http.get(`${this.baseUrl}feespaid/${studentid}`)
  }
}

