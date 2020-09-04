import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AgencyListModel } from '../models/agency.model';
import { environment } from 'src/environments/environment';
import { endpoints } from '../enums/endpoints.enum';
import { IAgenciesResponse } from '../interfaces/agency-response.interface';

const AGENCY_ENDPOINT = `${environment.api}${endpoints.agency}`;
const AGENCIES_ENDPOINT = `${environment.api}${endpoints.agencies}`;

@Injectable()
export class AgenciesService {
    private endpoint = '';

    constructor(private http: HttpClient) { }

    public getAgencies(): Observable<IAgenciesResponse[]> {

        return this.http.get<IAgenciesResponse[]>('/assets/agencies.json');
    }

    // public getAgency(): Observable<AgencyModel> {
    //     return this.http.get<IAgencyResponse>(AGENCIES_ENDPOINT).pipe(map( resp => new AgencyModel(resp)));
    // }
}
