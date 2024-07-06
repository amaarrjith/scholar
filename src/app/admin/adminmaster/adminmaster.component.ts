import { Component, OnInit } from '@angular/core';
import { StaffservicesService } from 'src/app/staffservices.service';
import { StudentservicesService } from 'src/app/studentservices.service';

@Component({
  selector: 'app-adminmaster',
  templateUrl: './adminmaster.component.html',
  styleUrls: ['./adminmaster.component.scss']
})
export class AdminmasterComponent implements OnInit{
  constructor(private services:StaffservicesService){}
  ngOnInit(): void {
    
  }
  logout(){
    this.services.logout().subscribe(response=>{
      alert("Admin Logout Successfull")
      window.location.href="/guestmaster/guesthome"
    })
  }
}