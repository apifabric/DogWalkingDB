import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './WalkSchedule-card.component.html',
  styleUrls: ['./WalkSchedule-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.WalkSchedule-card]': 'true'
  }
})

export class WalkScheduleCardComponent {


}