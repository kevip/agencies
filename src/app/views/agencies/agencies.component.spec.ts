import { TestBed, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AgenciesComponent } from './agencies.component';
import { AgenciesFacade } from 'src/app/commons/facades/agencies.facade';
import { AgencyListModel } from 'src/app/commons/models/agency.model';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AgenciesService } from 'src/app/commons/services/agencies.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StorageService } from 'src/app/commons/services/storage.service';


describe('AgenciesComponent', () => {
  let agenciesComponent: AgenciesComponent;
  let fixture: ComponentFixture<AgenciesComponent>;
  let facade: AgenciesFacade;
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
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AgenciesComponent
      ],
      imports: [HttpClientTestingModule],
      providers: [
        AgenciesFacade,
        AgenciesService,
        StorageService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    facade = TestBed.get(AgenciesFacade);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenciesComponent);
    agenciesComponent = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });


  it('should create the component', () => {
    expect(agenciesComponent).toBeTruthy();
  });

  it('Should get agencies OnInit', fakeAsync(() => {
    const agencyList = new AgencyListModel(response);
    spyOn(facade, 'getAgencies').and.returnValue(of(agencyList));
    agenciesComponent.ngOnInit();
    tick();
    expect(facade.getAgencies).toHaveBeenCalled();
    expect(agenciesComponent.agencyList).toEqual(agencyList);
  }));
});
