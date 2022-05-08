import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { CONTACTS } from '../contacts';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  @Input() contactID: number = 15;
  @Output() UpdatedOrCanceledEvent = new EventEmitter();


  firstName: string = '';
  lastName: string = '';
  phoneNumber: string = '';
  emailAddress: string = '';


  constructor() { }

  ngOnInit(): void {
    this.FillOutInfo();
  }

  FillOutInfo()
  {
    this.firstName = CONTACTS[this.contactID].fName;
    this.lastName = CONTACTS[this.contactID].lName;
    this.phoneNumber = CONTACTS[this.contactID].phoneNumber;
    this.emailAddress = CONTACTS[this.contactID].email;
  }

  UpdateContact(){
    CONTACTS[this.contactID].fName = this.firstName;
    CONTACTS[this.contactID].lName = this.lastName;
    CONTACTS[this.contactID].phoneNumber = this.phoneNumber;
    CONTACTS[this.contactID].email = this.emailAddress;
    this.UpdatedOrCanceledEvent.emit();
  }

  Cancel(){
    this.UpdatedOrCanceledEvent.emit();
  }
}
