import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SelectServerRoutingModule } from "./select-server-routing.module";
import { SelectServerComponent } from "./select-server.component";

@NgModule({
    declarations: [
        SelectServerComponent
    ],
    imports: [
        CommonModule,
        SelectServerRoutingModule
    ],
    providers: [
    ]
})
export class SelectServerModule { }