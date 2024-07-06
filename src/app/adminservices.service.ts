import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminservicesService {
  

  constructor(private http :HttpClient) { }

  private baseUrl = "http://127.0.0.1:8000/api/"

  district(DistrictForm:FormData):Observable<any>{
    return this.http.post(`${this.baseUrl}district`,DistrictForm)
  }

  getdistrict(){
    return this.http.get(`${this.baseUrl}district`)
  }
  location(LocationForm:FormData):Observable<any>{
    return this.http.post(`${this.baseUrl}location`,LocationForm)
  }
  course(CourseForm:FormData):Observable<any>{
    return this.http.post(`${this.baseUrl}course`,CourseForm)
  }
  getcourses(){
    return this.http.get(`${this.baseUrl}course`)
  }

  subject(SubjectForm:FormData):Observable<any>{
    return this.http.post(`${this.baseUrl}subject`,SubjectForm)
  }

  staff(StaffData:FormData):Observable<any>{
    return this.http.post(`${this.baseUrl}staff`,StaffData)
  }
  getstudents(){
    return this.http.get(`${this.baseUrl}students`)
  }
  activate(loginid:any){
    console.log(loginid)
    return this.http.get(`${this.baseUrl}activate/${loginid}`)

  }
  deactivate(loginid:any){
    return this.http.get(`${this.baseUrl}deactivate/${loginid}`,{})
  }

  getstaff(){
    return this.http.get(`${this.baseUrl}staff`)
  }

  deletestaff(staffid:any){
    return this.http.delete(`${this.baseUrl}staff/${staffid}`)
  }
  deletestudents(studentid:any){
    return this.http.delete(`${this.baseUrl}students/${studentid}`)
  }
  getstaffbyid(staffid:any){
    return this.http.get(`${this.baseUrl}staff/${staffid}`)
  }

  staffupdate(Staff:FormData,staffid:any){
    console.log(staffid)
    return this.http.post(`${this.baseUrl}staffupdate/${staffid}`,Staff)
  }
  getsubjects(){
    return this.http.get(`${this.baseUrl}getsubject`)
  }
  message(MessageForm:FormData):Observable<any>{
    return this.http.post(`${this.baseUrl}message`,MessageForm)
  }
  getmessage(){
    return this.http.get(`${this.baseUrl}message`)
  }
  deletemessage(id:any){
    return this.http.delete(`${this.baseUrl}message/${id}`)
  }

  getsubjectwithstaff(){
    return this.http.get(`${this.baseUrl}getsubjectwithstaff`)
  }

  delete(subjectid:any){
    return this.http.delete(`${this.baseUrl}getsubjectwithstaff/${subjectid}`)
  }
  activatesubject(subjectid:any){
    return this.http.get(`${this.baseUrl}activatesubject/${subjectid}`)
  }

  deactivatesubject(subjectid:any){
    return this.http.get(`${this.baseUrl}deactivatesubject/${subjectid}`)
  }
  addevent(EventForm:FormData){
    return this.http.post(`${this.baseUrl}addevent`,EventForm)
  }
  getevents(){
    return this.http.get(`${this.baseUrl}addevent`)
  }
  deleteevents(id:any){
    return this.http.delete(`${this.baseUrl}addevent/${id}`)
  }

  geteventsbyid(id:any) {
    return this.http.get(`${this.baseUrl}geteventsbyid/${id}`)
  }
  updatevent(id:any,EventForm:FormData){
    return this.http.post(`${this.baseUrl}updateevent/${id}`,EventForm)
  }

  getstudentswithactive(){
    return this.http.get(`${this.baseUrl}getstudentswithactive`)
  }

  getsubjectwithid(studentid:any){
    return this.http.get(`${this.baseUrl}getsubjectwithid/${studentid}`)
  }

  updatesubject(subjectid:any,UpddateForm:FormData){
    return this.http.post(`${this.baseUrl}updatesubject/${subjectid}`,UpddateForm)
  }
}

