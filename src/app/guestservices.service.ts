import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuestservicesService {

  private baseUrl = "http://127.0.0.1:8000/api/"
  constructor(private http:HttpClient) { }

  StudentRegister(StudentForm:FormData):Observable<any>{
    return this.http.post(`${this.baseUrl}students`,StudentForm)

  }

  login(Login:FormData):Observable<any>{
    return this.http.post(`${this.baseUrl}login`,Login)
  }

  getdistrict(){
    return this.http.get(`${this.baseUrl}district`)
  }

  getlocation(stateid:any):Observable<any>{
    return this.http.get(`${this.baseUrl}location/${stateid}`)
  }
  getcourses(){
    return this.http.get(`${this.baseUrl}course`)
  }
  getsubject(courseid:any):Observable<any>{
    return this.http.get(`${this.baseUrl}subject/${courseid}`)
  }
  deleteotp(username:any){
    return this.http.delete(`${this.baseUrl}otp/${username}`)
  }
  otpdone(studentid:any,Form:FormData){
    return this.http.post(`${this.baseUrl}otpdone/${studentid}`,Form)
  }
  changepassword(studentid:any,NewForm:FormData){
    return this.http.post(`${this.baseUrl}changepasswordbyotp/${studentid}`,NewForm)
  }
  getbankdetails(Form:FormData){
    return this.http.post(`${this.baseUrl}getbankdetails`,Form)
  }

  getsubjectwithsubjectid(subjectid:any){
    return this.http.get(`${this.baseUrl}getsubjectwithsubjectid/${subjectid}`)
  }
  cardsubmit(cardForm:FormData,studentid:any){
    return this.http.post(`${this.baseUrl}cardsubmit/${studentid}`,cardForm)
  }

  banksubmit(bankForm:FormData,studentid:any){
    return this.http.post(`${this.baseUrl}banksubmit/${studentid}`,bankForm)
  }
}


