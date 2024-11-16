import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'WalkService-new',
  templateUrl: './WalkService-new.component.html',
  styleUrls: ['./WalkService-new.component.scss']
})
export class WalkServiceNewComponent {
  @ViewChild("WalkServiceForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}