import { Component, OnInit, OnDestroy } from '@angular/core';
import { AgencyListModel } from 'src/app/commons/models/agency.model';
import { IAgency } from 'src/app/commons/interfaces/agency.interface';
import { AgenciesService } from 'src/app/commons/services/agencies.service';
import { Subscription } from 'rxjs';
import { AgenciesFacade } from 'src/app/commons/facades/agencies.facade';

@Component({
    selector: 'bcp-agencies',
    templateUrl: './agencies.component.html'
})
export class AgenciesComponent implements OnInit, OnDestroy {
    agencyList: AgencyListModel = { agencies: []} as AgencyListModel;
    subs = new Subscription();

    constructor(private facade: AgenciesFacade) { }

    ngOnInit(): void {
        this.subs.add(this.facade.getAgencies().subscribe( resp => {
            this.agencyList = resp;
        }));
    }

    ngOnDestroy(): void {
        this.subs.unsubscribe();
    }

}
