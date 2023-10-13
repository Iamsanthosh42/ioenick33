import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashingmachinesComponent } from './washingmachines.component';

describe('WashingmachinesComponent', () => {
  let component: WashingmachinesComponent;
  let fixture: ComponentFixture<WashingmachinesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WashingmachinesComponent]
    });
    fixture = TestBed.createComponent(WashingmachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
