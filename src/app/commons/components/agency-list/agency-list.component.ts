import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { IAgency } from '../../interfaces/agency.interface';

@Component({
    selector: 'bcp-agency-list',
    templateUrl: './agency-list.component.html',
    styleUrls: ['./agency-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgencyListComponent {

    @Input() agencies: IAgency[];

}
