import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  newsletterForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {
    const demoFormRaw = localStorage.getItem('demo_form');
    console.log(demoFormRaw);

    if (demoFormRaw) {
      const demoForm = JSON.parse(demoFormRaw);

      this.newsletterForm.patchValue({
        name: demoForm.name,
        email: demoForm.email,
      });
    }
  }

  onFormSubmit(): void {
    console.log(this.newsletterForm.value);
    localStorage.setItem('demo_form', JSON.stringify(this.newsletterForm.value));
  }

  onNameChange(eventData: { text: string }): void {
    console.log(eventData);
    this.newsletterForm.patchValue({ name: eventData.text });
  }

  onEmailChange(eventData: { text: string }): void {
    console.log(eventData);
    this.newsletterForm.patchValue({ email: eventData.text });
  }

}
