import { AgenciesService } from './agencies.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { IAgenciesResponse } from '../interfaces/agency-response.interface';
import { endpoints } from '../enums/endpoints.enum';

describe('AgenciesService', () => {
    let service: AgenciesService;
    let http: HttpTestingController;
    const response = [
        {
            agencia: 'Las Flores',
            distrito: 'San Juan De Lurigancho',
            provincia: 'Lima',
            departamento: 'Lima',
            direccion: 'Las Flores de Primavera 1487',
            lat: -77.01232817,
            lon: -12.0046896,
            code: 'A0'
        }
    ] as IAgenciesResponse[];

    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [AgenciesService]
        })
    );

    beforeEach(() => {
        service = TestBed.get(AgenciesService);
        http = TestBed.get(HttpTestingController);
    });

    it('Should be a get Method and return a response', () => {
        service.getAgencies().subscribe(resp => {
            void expect(resp).toEqual(response);
        });
        const req = http.expectOne(endpoints.agencies);
        void expect(req.request.method).toBe('GET');
        req.flush(response);
    });
});
