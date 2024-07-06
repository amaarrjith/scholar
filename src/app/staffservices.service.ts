import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaffservicesService {
  private baseUrl = "http://127.0.0.1:8000/api/"
  constructor(private http:HttpClient) { }

  getstaffdetailes(loginid:any){
    return this.http.get(`${this.baseUrl}getstaff/${loginid}`)
  }
  getstudentforstaff(staffid:any){
    return this.http.get(`${this.baseUrl}getstudentforstaff/${staffid}`)
  }
  present(id:any){
    return this.http.get(`${this.baseUrl}present/${id}`)
  }
  absent(id:any){
    return this.http.get(`${this.baseUrl}absent/${id}`)
  }
  attendancehistory(){
    return this.http.get(`${this.baseUrl}attendancehistory`)
  }
  logout(){
    return this.http.get(`${this.baseUrl}logout`)
  }
  staffmessages(ID:any,STUDENTID:any){
    return this.http.get(`${this.baseUrl}staffmessages/${ID}/${STUDENTID}`)
  }
  sendmessage(ID:any,MessageForm:FormData,studentid:any){
    return this.http.post(`${this.baseUrl}sendstaffmessage/${ID}/${studentid}`,MessageForm)
  }
  deletemessages(ID:any,studentid:any){
    return this.http.delete(`${this.baseUrl}sendstaffmessage/${ID}/${studentid}`)
  }

  getstudentsinchat(STAFFID:any){
    return this.http.get(`${this.baseUrl}getstudentsinchat/${STAFFID}`)
  }

  getstudentsdetailes(studentid:any){
    return this.http.get(`${this.baseUrl}getstudentsdetailes/${studentid}`)
  }

  getcount(staffid:any){
    return this.http.get(`${this.baseUrl}getcount/${staffid}`)
  }

  changestatus(staffid:any,studentid:any){
    return this.http.get(`${this.baseUrl}status/${staffid}/${studentid}`)
  }

  
}
