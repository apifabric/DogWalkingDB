import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './WalkService-card.component.html',
  styleUrls: ['./WalkService-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.WalkService-card]': 'true'
  }
})

export class WalkServiceCardComponent {


}