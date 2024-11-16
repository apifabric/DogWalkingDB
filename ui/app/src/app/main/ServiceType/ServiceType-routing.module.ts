import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceTypeHomeComponent } from './home/ServiceType-home.component';
import { ServiceTypeNewComponent } from './new/ServiceType-new.component';
import { ServiceTypeDetailComponent } from './detail/ServiceType-detail.component';

const routes: Routes = [
  {path: '', component: ServiceTypeHomeComponent},
  { path: 'new', component: ServiceTypeNewComponent },
  { path: ':id', component: ServiceTypeDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ServiceType-detail-permissions'
      }
    }
  },{
    path: ':service_type_id/WalkService', loadChildren: () => import('../WalkService/WalkService.module').then(m => m.WalkServiceModule),
    data: {
        oPermission: {
            permissionId: 'WalkService-detail-permissions'
        }
    }
}
];

export const SERVICETYPE_MODULE_DECLARATIONS = [
    ServiceTypeHomeComponent,
    ServiceTypeNewComponent,
    ServiceTypeDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceTypeRoutingModule { }