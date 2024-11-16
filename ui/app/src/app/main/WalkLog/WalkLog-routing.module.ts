import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WalkLogHomeComponent } from './home/WalkLog-home.component';
import { WalkLogNewComponent } from './new/WalkLog-new.component';
import { WalkLogDetailComponent } from './detail/WalkLog-detail.component';

const routes: Routes = [
  {path: '', component: WalkLogHomeComponent},
  { path: 'new', component: WalkLogNewComponent },
  { path: ':id', component: WalkLogDetailComponent,
    data: {
      oPermission: {
        permissionId: 'WalkLog-detail-permissions'
      }
    }
  },{
    path: ':walk_log_id/Feedback', loadChildren: () => import('../Feedback/Feedback.module').then(m => m.FeedbackModule),
    data: {
        oPermission: {
            permissionId: 'Feedback-detail-permissions'
        }
    }
}
];

export const WALKLOG_MODULE_DECLARATIONS = [
    WalkLogHomeComponent,
    WalkLogNewComponent,
    WalkLogDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalkLogRoutingModule { }