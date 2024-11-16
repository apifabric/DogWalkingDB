import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'WalkSchedule-new',
  templateUrl: './WalkSchedule-new.component.html',
  styleUrls: ['./WalkSchedule-new.component.scss']
})
export class WalkScheduleNewComponent {
  @ViewChild("WalkScheduleForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}