import { Component } from '@angular/core';
import { Card } from 'ui-controls';
import { assassins } from './assassins';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-components';
  cards: Card[] = assassins;

  onCardChange(cards: Card[]): void {
    console.log(cards);
  }

  log() {
    alert(this.title + ' copied to the clipboard');
  }
}
