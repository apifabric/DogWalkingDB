import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './WalkLog-card.component.html',
  styleUrls: ['./WalkLog-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.WalkLog-card]': 'true'
  }
})

export class WalkLogCardComponent {


}