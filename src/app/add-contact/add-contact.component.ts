import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ContactService } from '../contact.service'
import { Contact } from '../contact';
import { CONTACTS } from '../contacts';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { first, last } from 'rxjs';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  @Output() addedContactOrCanceled = new EventEmitter();

  id: number = 0;
  firstName: string = '';
  lastName: string = '';
  phoneNumber: string = '';
  emailAddress: string = '';

  Constructor() { }

  ngOnInit(): void {
  }

  Clear()
  {
    this.firstName = '';
    this.lastName = '';
    this.phoneNumber = '';
    this.emailAddress = '';
  }

  AddContact()
  {
    const newContact: Contact = {
      id: CONTACTS.length,
      fName: this.firstName,
      lName: this.lastName,
      phoneNumber: this.phoneNumber,
      email: this.emailAddress,
    }

    CONTACTS.push(newContact);
    this.addedContactOrCanceled.emit()
  }

  Cancel()
  {
    this.addedContactOrCanceled.emit()
  }
}
