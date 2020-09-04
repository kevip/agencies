import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { IAgency } from '../../interfaces/agency.interface';
import { Router } from '@angular/router';

@Component({
    selector: 'bcp-agency-item',
    templateUrl: './agency-item.component.html',
    styleUrls: ['./agency-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgencyItemComponent {

    @Input() agency: IAgency;

    constructor(private router: Router) { }

    agencyDetail(code: string): void {
        this.router.navigate(['/agency', code]);
    }

}
