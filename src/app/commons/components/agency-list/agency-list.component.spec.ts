import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AgencyListComponent } from './agency-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';


describe('AgencyListComponent', () => {
  let agencyItemComponent: AgencyListComponent;
  let fixture: ComponentFixture<AgencyListComponent>;
  const ROUTER = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AgencyListComponent
      ],
      providers: [
          {provide: Router, useValue: ROUTER}
      ],
      imports: [
        CommonModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyListComponent);
    agencyItemComponent = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(agencyItemComponent).toBeTruthy();
  });

});
