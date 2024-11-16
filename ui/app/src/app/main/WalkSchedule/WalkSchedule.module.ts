import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {WALKSCHEDULE_MODULE_DECLARATIONS, WalkScheduleRoutingModule} from  './WalkSchedule-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    WalkScheduleRoutingModule
  ],
  declarations: WALKSCHEDULE_MODULE_DECLARATIONS,
  exports: WALKSCHEDULE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WalkScheduleModule { }