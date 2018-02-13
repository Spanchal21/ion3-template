import { Component } from '@angular/core';

@Component({
  selector: 'ion-flip-card',
  templateUrl: 'ion-flip-card.html'
})
export class IonFlipCardComponent {
  text: string;
  constructor() {
    console.log('Hello IonFlipCardComponent Component');
    this.text = 'Hello this is ion-flip-component content';
  }

}
