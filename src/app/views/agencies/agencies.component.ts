import { Component, OnInit, OnDestroy } from '@angular/core';
import { AgencyListModel } from 'src/app/commons/models/agency.model';
import { IAgency } from 'src/app/commons/interfaces/agency.interface';
import { AgenciesService } from 'src/app/commons/services/agencies.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'bcp-agencies',
    templateUrl: './agencies.component.html'
})
export class AgenciesComponent implements OnInit, OnDestroy {
    agencyList: AgencyListModel = { agencies: []} as AgencyListModel;
    subs = new Subscription();

    constructor(private http: AgenciesService) { }

    ngOnInit(): void {
        this.subs.add(this.http.getAgencies().subscribe( resp => {
            console.log(resp);
            this.agencyList = resp;

        }));
    }

    ngOnDestroy(): void {
        this.subs.unsubscribe();
    }

}
