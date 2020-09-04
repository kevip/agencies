import { Injectable } from '@angular/core';
import { IAgency } from '../interfaces/agency.interface';

@Injectable()
export class StorageService {

    getAgencies(): string {

        return localStorage.getItem('agencies');
    }

    storeAgencies(agencies: IAgency[] = null): void {
        localStorage.setItem('agencies', JSON.stringify(agencies));
    }


}
