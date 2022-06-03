import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  displayedText: string = 'Change me';

  onSubmit(eventData: { text: string }): void {
    console.log(eventData);
    this.displayedText = eventData.text;
  }

}
