import { MenuRootItem } from 'ontimize-web-ngx';

import { ClientCardComponent } from './Client-card/Client-card.component';

import { DogCardComponent } from './Dog-card/Dog-card.component';

import { FeedbackCardComponent } from './Feedback-card/Feedback-card.component';

import { InvoiceCardComponent } from './Invoice-card/Invoice-card.component';

import { PaymentCardComponent } from './Payment-card/Payment-card.component';

import { PromotionCardComponent } from './Promotion-card/Promotion-card.component';

import { ServiceTypeCardComponent } from './ServiceType-card/ServiceType-card.component';

import { SpecialInstructionCardComponent } from './SpecialInstruction-card/SpecialInstruction-card.component';

import { WalkLogCardComponent } from './WalkLog-card/WalkLog-card.component';

import { WalkScheduleCardComponent } from './WalkSchedule-card/WalkSchedule-card.component';

import { WalkServiceCardComponent } from './WalkService-card/WalkService-card.component';

import { WalkerCardComponent } from './Walker-card/Walker-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Client', name: 'CLIENT', icon: 'view_list', route: '/main/Client' }
    
        ,{ id: 'Dog', name: 'DOG', icon: 'view_list', route: '/main/Dog' }
    
        ,{ id: 'Feedback', name: 'FEEDBACK', icon: 'view_list', route: '/main/Feedback' }
    
        ,{ id: 'Invoice', name: 'INVOICE', icon: 'view_list', route: '/main/Invoice' }
    
        ,{ id: 'Payment', name: 'PAYMENT', icon: 'view_list', route: '/main/Payment' }
    
        ,{ id: 'Promotion', name: 'PROMOTION', icon: 'view_list', route: '/main/Promotion' }
    
        ,{ id: 'ServiceType', name: 'SERVICETYPE', icon: 'view_list', route: '/main/ServiceType' }
    
        ,{ id: 'SpecialInstruction', name: 'SPECIALINSTRUCTION', icon: 'view_list', route: '/main/SpecialInstruction' }
    
        ,{ id: 'WalkLog', name: 'WALKLOG', icon: 'view_list', route: '/main/WalkLog' }
    
        ,{ id: 'WalkSchedule', name: 'WALKSCHEDULE', icon: 'view_list', route: '/main/WalkSchedule' }
    
        ,{ id: 'WalkService', name: 'WALKSERVICE', icon: 'view_list', route: '/main/WalkService' }
    
        ,{ id: 'Walker', name: 'WALKER', icon: 'view_list', route: '/main/Walker' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    ClientCardComponent

    ,DogCardComponent

    ,FeedbackCardComponent

    ,InvoiceCardComponent

    ,PaymentCardComponent

    ,PromotionCardComponent

    ,ServiceTypeCardComponent

    ,SpecialInstructionCardComponent

    ,WalkLogCardComponent

    ,WalkScheduleCardComponent

    ,WalkServiceCardComponent

    ,WalkerCardComponent

];