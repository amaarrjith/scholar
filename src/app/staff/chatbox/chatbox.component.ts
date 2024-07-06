import { Component, OnInit } from '@angular/core';
import { StaffservicesService } from 'src/app/staffservices.service';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss']
})
export class ChatboxComponent implements OnInit {
  Send = {
    message: ''
  }
  todayDate: string = new Date().toISOString().slice(0, 10);
  messagearraystaff: any[] = [];
  studentarray: any[] = [];
  othermessages: any[] = [];
  yesterdaymessages: any[] = [];
  todaymessages: any[] = [];
  studentid: any;
  studentfirstname: any;
  studentlastname: any;
  coursename: any;
  subjectname: any;
  namearray: any;
  yesterday: any;
  showChat = false;
  countarray: any[] = [];
  unread_messages: any;
  constructor(private services: StaffservicesService) { }
  ngOnInit(): void {

    const STAFFID = localStorage.getItem('staffid')
    this.services.getstudentsinchat(STAFFID).subscribe((response: any) => {
      this.studentarray = response.data
      this.countarray = response.countdata
      console.log(response)
    })

    const staffid = localStorage.getItem('staffid')
    this.services.getcount(staffid).subscribe((response: any) => {


      this.unread_messages = response.unread_message


      console.log(response)
    })

    



  }
  submit(studentid: any) {
    const ID = localStorage.getItem('staffid')
    const MessageForm = new FormData()
    MessageForm.append('messages', this.Send.message)
    this.services.sendmessage(ID, MessageForm, studentid).subscribe(response => {
      // location.reload()
      const ID = localStorage.getItem('staffid')
      this.services.staffmessages(ID, this.studentid).subscribe((response: any) => {
        this.messagearraystaff = response;
        console.log(this.messagearraystaff);
        this.todaymessages = response.todaymessages
        this.yesterdaymessages = response.yesterdaymessages
        this.othermessages = response.othermessages
        this.yesterday = response.yesterday_date
        this.Send.message = ''
      });
    })
  }
  delete(studentid: any) {
    console.log(studentid)
    const ID = localStorage.getItem('staffid')
    this.services.deletemessages(ID, studentid).subscribe(response => {
      location.reload()
    })
  }

  change(studentid: any) {
    this.showChat = true
    this.studentid = studentid;
    console.log(this.studentid)
    const ID = localStorage.getItem('staffid');

    this.services.getstudentsdetailes(studentid).subscribe((response: any) => {
      this.namearray = response;
      console.log(this.namearray)
    });

    this.services.staffmessages(ID, this.studentid).subscribe((response: any) => {
      this.messagearraystaff = response;
      console.log(this.messagearraystaff);
      this.todaymessages = response.todaymessages
      this.yesterdaymessages = response.yesterdaymessages
      this.othermessages = response.othermessages
      this.yesterday = response.yesterday_date
    });

    this.services.changestatus(ID, this.studentid).subscribe(response => {

    })

    const staffid = localStorage.getItem('staffid')
    this.services.getcount(staffid).subscribe((response: any) => {


      this.unread_messages = response.unread_message


      console.log(response)
    })

    const STAFFID = localStorage.getItem('staffid')
    this.services.getstudentsinchat(STAFFID).subscribe((response: any) => {
      this.studentarray = response.data
      this.countarray = response.countdata
      console.log(response)
    })

  }
  todaydate(): boolean {
    return this.todaymessages.some(data => data.date === this.todayDate);
  }

  yesterdaydate(): boolean {
    return this.yesterdaymessages.some(data => data.date === this.yesterday);
  }

  logout() {
    localStorage.clear()
    this.services.logout().subscribe(response => {

      window.location.href = "/guestmaster/guesthome"
    })

  }
}
