import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirconditionerComponent } from './airconditioner.component';

describe('AirconditionerComponent', () => {
  let component: AirconditionerComponent;
  let fixture: ComponentFixture<AirconditionerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirconditionerComponent]
    });
    fixture = TestBed.createComponent(AirconditionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
