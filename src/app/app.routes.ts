import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//pages
import { LoginComponent } from './pages/common/login/login.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';

const routes:Routes = [
    //base
    {
        component:LoginComponent,
        path: ''
    },
    {
        component:DashboardComponent,
        path: 'admindash'

    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);