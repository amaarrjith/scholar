import { Component, OnInit } from '@angular/core';
import { AdminservicesService } from 'src/app/adminservices.service';

@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.scss']
})
export class AdminregisterComponent implements OnInit{
  array: any[]=[];
  

  constructor(private services : AdminservicesService ){}

  State = {

    statename : ''

  }

  District = {

    stateid:'',
    districtname:''

  }


  ngOnInit(): void {
    
    this.services.getdistrict().subscribe((response:any)=>{
      this.array = response
      console.log(this.array)
    })

  }


  statesubmit(){
    const DistrictForm = new FormData()
    DistrictForm.append('statename',this.State.statename)
    this.services.district(DistrictForm).subscribe(response=>{
      alert("State Registration Done")
      location.reload()

    })
  }

  dissubmit(){
    const LocationForm = new FormData ()
    LocationForm.append('stateid',this.District.stateid)
    LocationForm.append('districtname',this.District.districtname)
    this.services.location(LocationForm).subscribe(response=>{
      alert("District Registration Done")
      location.reload()
    })
  }
}
