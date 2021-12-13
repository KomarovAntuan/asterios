import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/header/shared.module";
import { SelectServerModule } from "./content/select-server/select-server.module";
import { MainMenuRoutingModule } from "./main-menu-routing.module";
import { MainMenuComponent } from "./main-menu.component";
import { MenuComponent } from './content/menu/menu.component';

@NgModule({
    declarations: [
        MainMenuComponent,
        MenuComponent
    ],
    imports: [
        CommonModule,
        MainMenuRoutingModule,
        SharedModule,
        SelectServerModule
    ],
    providers: [
    ]
})
export class MainMenuModule { }