import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAgency } from 'src/app/commons/interfaces/agency.interface';

@Component({
    selector: 'bcp-agency-detail',
    templateUrl: './agency-detail.component.html',
})
export class  AgencyDetailComponent {
    agency: IAgency;

    constructor(private route: ActivatedRoute) {
        this.agency = this.route.snapshot.data.agency;
    }

}
