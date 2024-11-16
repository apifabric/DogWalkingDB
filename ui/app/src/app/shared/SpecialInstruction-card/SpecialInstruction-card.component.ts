import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './SpecialInstruction-card.component.html',
  styleUrls: ['./SpecialInstruction-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.SpecialInstruction-card]': 'true'
  }
})

export class SpecialInstructionCardComponent {


}