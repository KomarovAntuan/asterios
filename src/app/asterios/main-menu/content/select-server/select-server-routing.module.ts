import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SelectServerComponent } from "./select-server.component";

const routes: Routes = [
    {
        path: '',
        component: SelectServerComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SelectServerRoutingModule { }