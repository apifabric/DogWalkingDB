import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientHomeComponent } from './home/Client-home.component';
import { ClientNewComponent } from './new/Client-new.component';
import { ClientDetailComponent } from './detail/Client-detail.component';

const routes: Routes = [
  {path: '', component: ClientHomeComponent},
  { path: 'new', component: ClientNewComponent },
  { path: ':id', component: ClientDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Client-detail-permissions'
      }
    }
  },{
    path: ':client_id/Dog', loadChildren: () => import('../Dog/Dog.module').then(m => m.DogModule),
    data: {
        oPermission: {
            permissionId: 'Dog-detail-permissions'
        }
    }
},{
    path: ':client_id/Feedback', loadChildren: () => import('../Feedback/Feedback.module').then(m => m.FeedbackModule),
    data: {
        oPermission: {
            permissionId: 'Feedback-detail-permissions'
        }
    }
},{
    path: ':client_id/Invoice', loadChildren: () => import('../Invoice/Invoice.module').then(m => m.InvoiceModule),
    data: {
        oPermission: {
            permissionId: 'Invoice-detail-permissions'
        }
    }
}
];

export const CLIENT_MODULE_DECLARATIONS = [
    ClientHomeComponent,
    ClientNewComponent,
    ClientDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }