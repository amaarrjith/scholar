import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GuestservicesService } from 'src/app/guestservices.service';

@Component({
  selector: 'app-feepayment',
  templateUrl: './feepayment.component.html',
  styleUrls: ['./feepayment.component.scss']
})
export class FeepaymentComponent implements OnInit{
  bankdetails: any[]=[];
  showbox: any
  fees: any;
  constructor(private services:GuestservicesService){}
  Bank = {
    account:'',
    ifsc:'',
    account_name:'',
    account_owner:'',
    total:''
  }

  Card = {
    username:'',
    cardNumber:'',
    mm:'',
    yy:'',
    cvv:'',
    total:'',
  }
  ngOnInit(): void {
    
    this.showbox = "false"
    this.fees = localStorage.getItem('fees')

    console.log(this.fees)

  }

  getbank(){
    const Form = new FormData()
    Form.append('account',this.Bank.account)
    Form.append('ifsc',this.Bank.ifsc)
    this.services.getbankdetails(Form).subscribe((response:any)=>{
      this.bankdetails = response
      if (response){
        this.showbox = "true"
      }
      this.Bank = {
        account:this.Bank.account,
        ifsc:this.Bank.ifsc,
        account_name:this.bankdetails[0].bank_name,
        account_owner:this.bankdetails[0].bank_owner,
        total:this.fees
      }
      console.log(this.bankdetails)
    })
  }

  cardsubmit(){
    const cardForm = new FormData()
    cardForm.append('username',this.Card.username)
    cardForm.append('cardnumber',this.Card.cardNumber)
    cardForm.append('mm',this.Card.mm)
    cardForm.append('yy',this.Card.yy)
    cardForm.append('cvv',this.Card.cvv)
    cardForm.append('total',this.fees)
    const studentid = localStorage.getItem('studentid')
    this.services.cardsubmit(cardForm,studentid).subscribe(response=>{
      alert("Registration Done")
      window.location.href="/guestmaster/guesthome"
    })
  }

  banksubmit(){
    const bankForm = new FormData()
    bankForm.append('account',this.Bank.account)
    bankForm.append('ifsc',this.Bank.ifsc)
    bankForm.append('account_name',this.Bank.account_name)
    bankForm.append('account_owner',this.Bank.account_owner)
    bankForm.append('total',this.Bank.total)
    const studentid = localStorage.getItem('studentid')
    this.services.banksubmit(bankForm,studentid).subscribe(response=>{
      alert("Registration Done")
      window.location.href="/guestmaster/guesthome"
    })
  }
}
