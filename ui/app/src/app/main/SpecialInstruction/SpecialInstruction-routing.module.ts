import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpecialInstructionHomeComponent } from './home/SpecialInstruction-home.component';
import { SpecialInstructionNewComponent } from './new/SpecialInstruction-new.component';
import { SpecialInstructionDetailComponent } from './detail/SpecialInstruction-detail.component';

const routes: Routes = [
  {path: '', component: SpecialInstructionHomeComponent},
  { path: 'new', component: SpecialInstructionNewComponent },
  { path: ':id', component: SpecialInstructionDetailComponent,
    data: {
      oPermission: {
        permissionId: 'SpecialInstruction-detail-permissions'
      }
    }
  }
];

export const SPECIALINSTRUCTION_MODULE_DECLARATIONS = [
    SpecialInstructionHomeComponent,
    SpecialInstructionNewComponent,
    SpecialInstructionDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecialInstructionRoutingModule { }