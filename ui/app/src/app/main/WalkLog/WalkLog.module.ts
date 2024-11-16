import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {WALKLOG_MODULE_DECLARATIONS, WalkLogRoutingModule} from  './WalkLog-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    WalkLogRoutingModule
  ],
  declarations: WALKLOG_MODULE_DECLARATIONS,
  exports: WALKLOG_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WalkLogModule { }