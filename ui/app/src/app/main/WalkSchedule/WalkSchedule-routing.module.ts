import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WalkScheduleHomeComponent } from './home/WalkSchedule-home.component';
import { WalkScheduleNewComponent } from './new/WalkSchedule-new.component';
import { WalkScheduleDetailComponent } from './detail/WalkSchedule-detail.component';

const routes: Routes = [
  {path: '', component: WalkScheduleHomeComponent},
  { path: 'new', component: WalkScheduleNewComponent },
  { path: ':id', component: WalkScheduleDetailComponent,
    data: {
      oPermission: {
        permissionId: 'WalkSchedule-detail-permissions'
      }
    }
  },{
    path: ':walk_schedule_id/SpecialInstruction', loadChildren: () => import('../SpecialInstruction/SpecialInstruction.module').then(m => m.SpecialInstructionModule),
    data: {
        oPermission: {
            permissionId: 'SpecialInstruction-detail-permissions'
        }
    }
},{
    path: ':walk_schedule_id/WalkLog', loadChildren: () => import('../WalkLog/WalkLog.module').then(m => m.WalkLogModule),
    data: {
        oPermission: {
            permissionId: 'WalkLog-detail-permissions'
        }
    }
},{
    path: ':walk_schedule_id/WalkService', loadChildren: () => import('../WalkService/WalkService.module').then(m => m.WalkServiceModule),
    data: {
        oPermission: {
            permissionId: 'WalkService-detail-permissions'
        }
    }
}
];

export const WALKSCHEDULE_MODULE_DECLARATIONS = [
    WalkScheduleHomeComponent,
    WalkScheduleNewComponent,
    WalkScheduleDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalkScheduleRoutingModule { }