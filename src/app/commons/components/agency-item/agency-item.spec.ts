import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AgencyItemComponent } from './agency-item.component';
import { Router } from '@angular/router';


describe('AgencyItemComponent', () => {
  let agencyItemComponent: AgencyItemComponent;
  let fixture: ComponentFixture<AgencyItemComponent>;
  const ROUTER = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AgencyItemComponent
      ],
      providers: [
          {provide: Router, useValue: ROUTER}
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyItemComponent);
    agencyItemComponent = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(agencyItemComponent).toBeTruthy();
  });

  it('Should navigate to agency detail', () => {
    agencyItemComponent.agencyDetail('COD1');
    expect(ROUTER.navigate).toHaveBeenCalledWith(['/agency', 'COD1']);
  });
});
