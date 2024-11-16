import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WalkServiceHomeComponent } from './home/WalkService-home.component';
import { WalkServiceNewComponent } from './new/WalkService-new.component';
import { WalkServiceDetailComponent } from './detail/WalkService-detail.component';

const routes: Routes = [
  {path: '', component: WalkServiceHomeComponent},
  { path: 'new', component: WalkServiceNewComponent },
  { path: ':id', component: WalkServiceDetailComponent,
    data: {
      oPermission: {
        permissionId: 'WalkService-detail-permissions'
      }
    }
  }
];

export const WALKSERVICE_MODULE_DECLARATIONS = [
    WalkServiceHomeComponent,
    WalkServiceNewComponent,
    WalkServiceDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalkServiceRoutingModule { }