import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAgency } from 'src/app/commons/interfaces/agency.interface';
import { IAgencyRequest } from 'src/app/commons/interfaces/agency-request.interface';
import { AgenciesFacade } from 'src/app/commons/facades/agencies.facade';
import { Subscription } from 'rxjs';

@Component({
    selector: 'bcp-agency-detail',
    templateUrl: './agency-detail.component.html',
})
export class  AgencyDetailComponent implements OnDestroy {
    agency: IAgency;
    subs = new Subscription();

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private agenciesFacade: AgenciesFacade) {
        this.agency = this.route.snapshot.data.agency;
    }

    ngOnDestroy(): void {
        this.subs.unsubscribe();
    }

    async updateAgency(agency: IAgencyRequest) {
        try {
            await this.agenciesFacade.updateAgency(agency);
            this.router.navigate(['/home']);
        } catch (err) {
            // TODO: Add catch logic
        }
    }

}
