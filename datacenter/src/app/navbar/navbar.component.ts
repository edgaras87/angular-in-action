// Imports the Output decorator and EventEmitter factory
import { Component, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  // Component styles property
  styles: [`.btn {background-color: #999999; }`],
  encapsulation: ViewEncapsulation.Emulated
})
export class NavbarComponent  {
  // Creates a property with Output of an EventEmitter type
  // The output is typed to an EventEmitter<null> type, which means this variable will hold an EventEmitter that doesn’t emit any data.
  @Output() onRefresh: EventEmitter<null> = new EventEmitter<null>();

  // Implements a method to call on click that emits the event
  refresh() {
    this.onRefresh.emit();
  }

}
