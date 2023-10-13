import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroovensComponent } from './microovens.component';

describe('MicroovensComponent', () => {
  let component: MicroovensComponent;
  let fixture: ComponentFixture<MicroovensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MicroovensComponent]
    });
    fixture = TestBed.createComponent(MicroovensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
