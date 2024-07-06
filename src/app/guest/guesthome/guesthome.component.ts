import { Component, OnInit } from '@angular/core';
import { AdminservicesService } from 'src/app/adminservices.service';

@Component({
  selector: 'app-guesthome',
  templateUrl: './guesthome.component.html',
  styleUrls: ['./guesthome.component.scss']
})
export class GuesthomeComponent implements OnInit{
  staffarray: any[]=[];

  Message ={
    name :'',
    email:'',
    message :''
  }
  constructor(private service:AdminservicesService){}
  ngOnInit(): void {
    this.service.getstaff().subscribe((response:any)=>{
      this.staffarray = response
      console.log(this.staffarray)
    })
  }

  submit(){
    const MessageForm = new FormData()
    MessageForm.append('name',this.Message.name)
    MessageForm.append('email',this.Message.email)
    MessageForm.append('message',this.Message.message)
    this.service.message(MessageForm).subscribe(response=>{
      alert("Message Sent")
      location.reload()
    })
  }
}
