import { Component, OnInit } from '@angular/core';
import { AdminservicesService } from 'src/app/adminservices.service';

@Component({
  selector: 'app-subjectview',
  templateUrl: './subjectview.component.html',
  styleUrls: ['./subjectview.component.scss']
})
export class SubjectviewComponent implements OnInit{
  subjectarray: any[]=[];
  constructor(private services:AdminservicesService){}
  ngOnInit(): void {

    this.services.getsubjectwithstaff().subscribe((response:any)=>{
      this.subjectarray = response
      console.log(this.subjectarray)
      
    })

  
  }
  activate(subjectid:number){
    this.services.activatesubject(subjectid).subscribe(response=>{
      alert("Activated")
      location.reload()
    })

  }

  deactivate(subjectid:number){
    this.services.deactivatesubject(subjectid).subscribe(response=>{
      alert("De-Activated")
      location.reload()
    })
  }

  delete(subjectid:number){
    this.services.deletestaff(subjectid).subscribe((response:any)=>{
      alert("Deleted Sucessfully")
      location.reload()
    })

  }
}
