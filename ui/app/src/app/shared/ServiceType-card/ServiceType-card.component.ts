import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ServiceType-card.component.html',
  styleUrls: ['./ServiceType-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ServiceType-card]': 'true'
  }
})

export class ServiceTypeCardComponent {


}