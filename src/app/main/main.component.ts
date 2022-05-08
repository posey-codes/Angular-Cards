import { Component, Input, Output, EventEmitter, ViewChild, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Contact } from '../contact';
import { CONTACTS } from '../contacts';
import { ContactComponent } from '../contact/contact.component';
import { EditContactComponent } from '../edit-contact/edit-contact.component';
import { AddContactComponent } from '../add-contact/add-contact.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = 'angular';
  id: number = 0;

  home: boolean = true;
  addContact: boolean = false;
  edit: boolean = false;

  homeButton(){
    this.home = true;
    this.addContact = false;
    this.edit = false;
  }

  addContactButton(){
    this.home = false;
    this.addContact = true;
    this.edit = false;
  }

  eventReceived(id: number){
    this.home = false;
    this.addContact = false;
    this.edit = true;

    this.id = id;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
