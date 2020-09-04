import { Injectable } from '@angular/core';
import { AgenciesService } from '../services/agencies.service';
import { Observable, of } from 'rxjs';
import { AgencyListModel } from '../models/agency.model';
import { map, take, tap } from 'rxjs/operators';
import { StorageService } from '../services/storage.service';
import { IAgency } from '../interfaces/agency.interface';
import { IAgencyRequest } from '../interfaces/agency-request.interface';

@Injectable()
export class AgenciesFacade {
    constructor(
        private agenciesService: AgenciesService,
        private storageService: StorageService) {}

    getAgencies(): Observable<AgencyListModel> {
        const agencies = JSON.parse(this.storageService.getAgencies());

        return agencies !== null ? of({agencies} as AgencyListModel) :
                    this.agenciesService.getAgencies().pipe(
                        map(resp => new AgencyListModel(resp)),
                        tap(resp => this.storageService.storeAgencies(resp.agencies)),
                        take(1),
                    );
    }

    updateAgency(agency: IAgencyRequest): Promise<boolean> {
        return new Promise((resp, rej) => {
            let agencies = JSON.parse(this.storageService.getAgencies());
            agencies = [...agencies.map((agc: IAgency) => {

                return (agc.code === agency.code) ? {...agc, ...agency} : agc;
            })];
            this.storageService.storeAgencies(agencies);
            resp(true);
        });
    }

    getAgency(code: string): Promise<IAgency> {
        return new Promise((resolve, reject) => {
            const agencies = JSON.parse(this.storageService.getAgencies()) as IAgency[];
            const agency = agencies.find(a => a.code ===  code);

            return agency ? resolve(agency) : reject();
        });
    }

}
