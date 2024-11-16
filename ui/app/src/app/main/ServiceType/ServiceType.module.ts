import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SERVICETYPE_MODULE_DECLARATIONS, ServiceTypeRoutingModule} from  './ServiceType-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ServiceTypeRoutingModule
  ],
  declarations: SERVICETYPE_MODULE_DECLARATIONS,
  exports: SERVICETYPE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ServiceTypeModule { }