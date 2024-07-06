import { Component, OnInit } from '@angular/core';
import { StudentservicesService } from 'src/app/studentservices.service';

@Component({
  selector: 'app-messagestaff',
  templateUrl: './messagestaff.component.html',
  styleUrls: ['./messagestaff.component.scss']
})
export class MessagestaffComponent implements OnInit{
  Send = {
    message :''
  }
  messagearraystudent: any[]=[];
  date: any;
  todayDate: string = new Date().toISOString().slice(0, 10);
  todaymessages: any[]=[];
  othermessages: any[]=[];
  yesterdaymessages: any[]=[];
  yesterday: any;
  otherdate: any;
  staffarray: any[]=[];
  
  constructor(private service:StudentservicesService){}
  ngOnInit(): void {
    const ID = localStorage.getItem('loginid')
    this.service.viewmessage(ID).subscribe((response:any)=>{
      console.log(response.todaymessages)
      console.log(response.othermessages)
      // this.otherdate = response.todaymessages
      this.todaymessages = response.todaymessages
      this.othermessages = response.othermessages
      this.otherdate = this.othermessages[0].date
      this.yesterdaymessages = response.yesterdaymessages
      this.yesterday = response.yesterday_date
      console.log(this.yesterday)
    })

    this.service.getstaffforstudent(ID).subscribe((response:any)=>{
      this.staffarray = response
    })
    
    
  }
  submit(){
    const ID = localStorage.getItem('loginid')
    const MessageForm = new FormData()
    MessageForm.append('messages',this.Send.message)
    this.service.sendmessage(ID,MessageForm).subscribe(response=>{
      const ID = localStorage.getItem('loginid')
      this.service.viewmessage(ID).subscribe((response:any)=>{
      console.log(response.todaymessages)
      console.log(response.othermessages)
      this.todaymessages = response.todaymessages
      this.othermessages = response.othermessages
      this.yesterdaymessages = response.yesterdaymessages
      this.Send.message = ''
    
    })
    })
  }

  delete(){
    const ID = localStorage.getItem('loginid')
    this.service.deletemessage(ID).subscribe(response=>{
      location.reload()
    })
  }

  todaydate():boolean{
    return this.todaymessages.some(data => data.date === this.todayDate);
  }

  yesterdaydate():boolean{
    return this.yesterdaymessages.some(data => data.date === this.yesterday);
  }

}
