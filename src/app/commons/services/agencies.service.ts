import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { endpoints } from '../enums/endpoints.enum';
import { IAgenciesResponse } from '../interfaces/agency-response.interface';

const AGENCIES_ENDPOINT = endpoints.agencies;

@Injectable()
export class AgenciesService {

    constructor(private http: HttpClient) { }

    public getAgencies(): Observable<IAgenciesResponse[]> {

        return this.http.get<IAgenciesResponse[]>(AGENCIES_ENDPOINT);
    }

}
