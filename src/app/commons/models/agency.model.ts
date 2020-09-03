import { IAgenciesResponse } from '../interfaces/agency-response.interface';
import { IAgency } from '../interfaces/agency.interface';

export class AgencyListModel {
    agencies: IAgency[];

    constructor(response: IAgenciesResponse[]) {
        this.agencies = this.getAgencies(response);
    }

    private getAgencies(agencies: IAgenciesResponse[]): IAgency[] {
        return (agencies && agencies.length > 0) ? agencies.map(agency =>
            ({
                name: agency.agencia,
                district: agency.distrito,
                province: agency.provincia,
                department: agency.departamento,
                address: agency.direccion,
                latitude: agency.lat,
                longitude: agency.lon,
            })) : [];
    }
}
