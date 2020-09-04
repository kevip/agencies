import { Injectable } from '@angular/core';
import { AgenciesService } from '../services/agencies.service';
import { Observable, of } from 'rxjs';
import { AgencyListModel } from '../models/agency.model';
import { map, take, tap } from 'rxjs/operators';
import { StorageService } from '../services/storage.service';
import { IAgency } from '../interfaces/agency.interface';

@Injectable()
export class AgenciesFacade {
    constructor(
        private agenciesService: AgenciesService,
        private storageService: StorageService) {}

    getAgencies(): Observable<AgencyListModel> {
        const agencies = JSON.parse(this.storageService.getAgencies()) as IAgency[];

        return agencies !== null ? of({agencies} as AgencyListModel) :
                    this.agenciesService.getAgencies().pipe(
                        map(resp => new AgencyListModel(resp)),
                        tap(resp => this.storageService.storeAgencies(resp.agencies)),
                        take(1),
                    );
    }

    updateAgency(): Observable<IAgency> {
        return null;
    }

}
