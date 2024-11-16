import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Client', loadChildren: () => import('./Client/Client.module').then(m => m.ClientModule) },
    
        { path: 'Dog', loadChildren: () => import('./Dog/Dog.module').then(m => m.DogModule) },
    
        { path: 'Feedback', loadChildren: () => import('./Feedback/Feedback.module').then(m => m.FeedbackModule) },
    
        { path: 'Invoice', loadChildren: () => import('./Invoice/Invoice.module').then(m => m.InvoiceModule) },
    
        { path: 'Payment', loadChildren: () => import('./Payment/Payment.module').then(m => m.PaymentModule) },
    
        { path: 'Promotion', loadChildren: () => import('./Promotion/Promotion.module').then(m => m.PromotionModule) },
    
        { path: 'ServiceType', loadChildren: () => import('./ServiceType/ServiceType.module').then(m => m.ServiceTypeModule) },
    
        { path: 'SpecialInstruction', loadChildren: () => import('./SpecialInstruction/SpecialInstruction.module').then(m => m.SpecialInstructionModule) },
    
        { path: 'WalkLog', loadChildren: () => import('./WalkLog/WalkLog.module').then(m => m.WalkLogModule) },
    
        { path: 'WalkSchedule', loadChildren: () => import('./WalkSchedule/WalkSchedule.module').then(m => m.WalkScheduleModule) },
    
        { path: 'WalkService', loadChildren: () => import('./WalkService/WalkService.module').then(m => m.WalkServiceModule) },
    
        { path: 'Walker', loadChildren: () => import('./Walker/Walker.module').then(m => m.WalkerModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }