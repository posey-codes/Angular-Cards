import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ContactService } from '../contact.service'
import { Contact } from '../contact';
import { CONTACTS } from '../contacts';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactList: Contact[] = CONTACTS;
  @Output() editClickedEvent = new EventEmitter();
  
  
  constructor() { }

  ngOnInit(): void {
  }

  editButtonClicked(id: number){
    this.editClickedEvent.emit(id);
  }

  DeleteContact(id: number){
      CONTACTS.forEach((Element, index) => {
        if(Element.id == id) CONTACTS.splice(index, 1)
      })
  }

}
