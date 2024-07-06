import { Component, OnInit } from '@angular/core';
import { AdminservicesService } from 'src/app/adminservices.service';

@Component({
  selector: 'app-staffview',
  templateUrl: './staffview.component.html',
  styleUrls: ['./staffview.component.scss']
})
export class StaffviewComponent implements OnInit{
  staffarray: any[]=[];
  constructor(private services:AdminservicesService){}
  ngOnInit(): void {

    this.services.getstaff().subscribe((response:any)=>{
      this.staffarray = response
      console.log(this.staffarray)
      
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

  delete(staffid:number){
    this.services.deletestaff(staffid).subscribe((response:any)=>{
      alert("Deleted Sucessfully")
      location.reload()
    })

  }
}
