import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './content/menu/menu.component';
import { MainMenuComponent } from './main-menu.component';

const routes: Routes = [
    {
        path: '',
        component: MainMenuComponent,
        children: [
            {
                path: '',
                component: MenuComponent
            },
            {
                path: 'select-server',
                loadChildren: () => import('../../asterios/main-menu/content/select-server/select-server.module').then(module => module.SelectServerModule)
            },
            // {
            //     path: 'cars',
            //     loadChildren: () => import('../pages/cars/cars.module').then(module => module.CarsModule)
            // },
            // {
            //     path: 'order-list',
            //     loadChildren: () => import('../pages/orders/orders.module').then(module => module.OrderListModule)
            // },
            // {
            //     path: 'order-settings',
            //     loadChildren: () => import('../pages/order-settings/order-settings.module').then(module => module.OrderSettingsModule)
            // },
            // {
            //     path: 'error',
            //     component: ErrorComponent
            // }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainMenuRoutingModule { }