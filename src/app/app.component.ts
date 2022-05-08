import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Contact } from './contact';
import { CONTACTS } from './contacts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
}
