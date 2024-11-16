import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WalkerHomeComponent } from './home/Walker-home.component';
import { WalkerNewComponent } from './new/Walker-new.component';
import { WalkerDetailComponent } from './detail/Walker-detail.component';

const routes: Routes = [
  {path: '', component: WalkerHomeComponent},
  { path: 'new', component: WalkerNewComponent },
  { path: ':id', component: WalkerDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Walker-detail-permissions'
      }
    }
  },{
    path: ':walker_id/WalkSchedule', loadChildren: () => import('../WalkSchedule/WalkSchedule.module').then(m => m.WalkScheduleModule),
    data: {
        oPermission: {
            permissionId: 'WalkSchedule-detail-permissions'
        }
    }
}
];

export const WALKER_MODULE_DECLARATIONS = [
    WalkerHomeComponent,
    WalkerNewComponent,
    WalkerDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalkerRoutingModule { }