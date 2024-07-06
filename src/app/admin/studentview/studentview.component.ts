import { Component, OnInit } from '@angular/core';
import { AdminservicesService } from 'src/app/adminservices.service';

@Component({
  selector: 'app-studentview',
  templateUrl: './studentview.component.html',
  styleUrls: ['./studentview.component.scss']
})
export class StudentviewComponent implements OnInit{
  studentarray: any[]=[];
  constructor(private services : AdminservicesService){}
  ngOnInit(): void {
    this.services.getstudentswithactive().subscribe((response:any)=>{
      this.studentarray = response
      console.log(this.studentarray)
    })
  }
  activate(loginid:number){
    this.services.activate(loginid).subscribe(response=>{
      alert("Activated")
      location.reload()
    })

  }

  deactivate(loginid:number){
    this.services.deactivate(loginid).subscribe(response=>{
      alert("De-Activated")
      location.reload()
    })

  }

  delete(studentid:number){
    this.services.deletestudents(studentid).subscribe((response:any)=>{
      alert("Student Deleted")
      location.reload()
    })
  }
}
