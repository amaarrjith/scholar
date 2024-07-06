import { Component, OnInit } from '@angular/core';
import { StudentservicesService } from 'src/app/studentservices.service';

@Component({
  selector: 'app-studentedit',
  templateUrl: './studentedit.component.html',
  styleUrls: ['./studentedit.component.scss']
})
export class StudenteditComponent implements OnInit{
  studentarray: any[]=[];
  constructor(private service:StudentservicesService){}
  
  ngOnInit(): void {
    const ID = localStorage.getItem('loginid')
    this.service.getstudent(ID).subscribe((response:any)=>{
      this.studentarray = response
      console.log(this.studentarray)
    })
  }

}
