import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {WALKSERVICE_MODULE_DECLARATIONS, WalkServiceRoutingModule} from  './WalkService-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    WalkServiceRoutingModule
  ],
  declarations: WALKSERVICE_MODULE_DECLARATIONS,
  exports: WALKSERVICE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WalkServiceModule { }