import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {
  
  name = ""
  selectedState: any
  city = ""
  street = ""
  phone = ""
  email = ""
  notes = ""
  
  x1 = false
  x2 = false
  x3 = false
  x4 = false
  x5 = false
  x6 = false
  x6_comment = "Your email is required";

  states = [{name:"Cairo"}, {name:"Alexandria"}, {name:"Giza"}, {name:"Luxor"}, {name:"Aswan"}]

  items: MenuItem[] = [
    {label: 'Cart Items'},
    {label: 'Shipping'},
    {label: 'Payment'},
    {label: 'Confirmation'}
  ];

  constructor(private router: Router) {
    this.name = localStorage.getItem('name')!
    this.selectedState = this.states.find((x:any)=>{return x.name == localStorage.getItem('selectedState')!}) 
    this.city = localStorage.getItem('city')!
    this.street = localStorage.getItem('street')!
    this.phone = localStorage.getItem('phone')!
    this.email = localStorage.getItem('email')!
    this.notes = localStorage.getItem('notes')!
  }

  ngOnInit(): void {
  }

  next() {
    this.x1 = this.name == ""
    this.x2 = this.selectedState == null
    this.x3 = this.city == ""
    this.x4 = this.street == ""
    this.x5 = this.phone.length != 11

    if (this.email == "") {
      this.x6 = true;
      this.x6_comment = "Your email is required";
    }
    else if (!this.email.includes('@') || !this.email.includes('.')) {
      this.x6 = true;
      this.x6_comment = "Please enter a valid email";
    }
    else {
      this.x6 = false;
    }

    if (!(this.x1||this.x2||this.x3||this.x4||this.x5||this.x6)) {
      localStorage.setItem('name', this.name);
      localStorage.setItem('selectedState', this.selectedState.name);
      localStorage.setItem('city', this.city);
      localStorage.setItem('street', this.street);
      localStorage.setItem('phone', this.phone);
      localStorage.setItem('email', this.email);
      localStorage.setItem('notes', this.notes);

      this.router.navigate(['/shop/payment']);
    }
  }
}
