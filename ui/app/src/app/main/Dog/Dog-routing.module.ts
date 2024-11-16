import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogHomeComponent } from './home/Dog-home.component';
import { DogNewComponent } from './new/Dog-new.component';
import { DogDetailComponent } from './detail/Dog-detail.component';

const routes: Routes = [
  {path: '', component: DogHomeComponent},
  { path: 'new', component: DogNewComponent },
  { path: ':id', component: DogDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Dog-detail-permissions'
      }
    }
  },{
    path: ':dog_id/WalkSchedule', loadChildren: () => import('../WalkSchedule/WalkSchedule.module').then(m => m.WalkScheduleModule),
    data: {
        oPermission: {
            permissionId: 'WalkSchedule-detail-permissions'
        }
    }
}
];

export const DOG_MODULE_DECLARATIONS = [
    DogHomeComponent,
    DogNewComponent,
    DogDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DogRoutingModule { }