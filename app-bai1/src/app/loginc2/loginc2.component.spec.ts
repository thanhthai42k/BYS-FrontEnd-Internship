import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Loginc2Component } from './loginc2.component';

describe('Loginc2Component', () => {
  let component: Loginc2Component;
  let fixture: ComponentFixture<Loginc2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Loginc2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Loginc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
