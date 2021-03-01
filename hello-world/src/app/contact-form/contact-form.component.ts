import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  constructor() { }

  contactMethods = [
    {id: 1, name: "email"},
    {id: 2, name: "call"}
  ];

  log(x: any){console.log(x)}

  submit(x: any){
    console.log(x)
  }
}
