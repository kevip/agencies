import { LayoutComponent } from "./base/layout.component";
import { NgModule } from '@angular/core';

const COMPONENTS = [
    LayoutComponent
];

@NgModule({
    declarations: [...COMPONENTS],
    exports: [...COMPONENTS]
})
export class ComponentsModule {}
