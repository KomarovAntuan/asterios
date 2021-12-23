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
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainMenuRoutingModule { }