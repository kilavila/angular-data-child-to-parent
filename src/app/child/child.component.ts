import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Output() result = new EventEmitter<{ text: string }>();

  submit(userInput: string): void {
    this.result.emit({ text: userInput })
  }

}
