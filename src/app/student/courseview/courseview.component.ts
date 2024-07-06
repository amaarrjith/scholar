import { R3SelectorScopeMode } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { StudentservicesService } from 'src/app/studentservices.service';

@Component({
  selector: 'app-courseview',
  templateUrl: './courseview.component.html',
  styleUrls: ['./courseview.component.scss']
})
export class CourseviewComponent implements OnInit{
  array: any[]=[];
  constructor (private service : StudentservicesService){}
  ngOnInit(): void {
    const ID = localStorage.getItem('loginid')
    this.service.getstaffforstudent(ID).subscribe((response:any)=>{
      this.array = response 
    })
  }

}
