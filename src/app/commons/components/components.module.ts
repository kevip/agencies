import { HeaderComponent } from './header/header.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { AgencyListComponent } from './agency-list/agency-list.component';
import { AgencyItemComponent } from './agency-item/agency-item.component';
import { CommonModule } from '@angular/common';
import { AgencyFormDetailComponent } from './agency-form-detail/agency-form-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const COMPONENTS = [
    AgencyListComponent,
    AgencyItemComponent,
    AgencyFormDetailComponent,
    NavHeaderComponent,
    HeaderComponent
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [CommonModule, ReactiveFormsModule],
    exports: [...COMPONENTS],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
