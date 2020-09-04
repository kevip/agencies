import { TestBed, async } from '@angular/core/testing';
import { NavHeaderComponent } from './nav-header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


describe('NavHeaderComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavHeaderComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the component', () => {
    const fixture = TestBed.createComponent(NavHeaderComponent);
    const navHeaderComponent = fixture.debugElement.componentInstance;
    expect(navHeaderComponent).toBeTruthy();
  });
});
