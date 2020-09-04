import { TestBed } from '@angular/core/testing';
import { StorageService } from './storage.service';

describe('StorageService', () => {
    let service: StorageService;
    let store;

    const agencies = [
        {
            address: 'Las Flores de Primavera 1487',
            code: 'A0',
            department: 'Lima',
            district: 'San Juan De Lurigancho',
            latitude: -77.01232817,
            longitude: -12.0046896,
            name: 'Las Flores',
            province: 'Lima'
        }
    ];

    beforeEach(() => {
        store = {};
        spyOn(localStorage, 'getItem').and.callFake( (key: string): string => {
          return store[key] || null;
        });
        spyOn(localStorage, 'setItem').and.callFake( (key: string, value: string): string => {
            return store[key] = <string>value;
        });
    });

    beforeEach(() =>
        TestBed.configureTestingModule({
            providers: [StorageService]
        })
    );

    beforeEach(() => {
        service = TestBed.get(StorageService);
    });

    it('Should get agencies from localStorage', () => {
        localStorage.setItem('agencies', JSON.stringify(agencies));
        expect(JSON.parse(service.getAgencies())).toEqual(agencies);
    });

    it('Should set agencies to localStorage', () => {
        service.storeAgencies(agencies);
        const agenc = JSON.parse(localStorage.getItem('agencies'));
        expect(agenc).toEqual(agencies);
    });
});
