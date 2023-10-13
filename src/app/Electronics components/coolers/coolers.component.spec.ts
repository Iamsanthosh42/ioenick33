import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolersComponent } from './coolers.component';

describe('CoolersComponent', () => {
  let component: CoolersComponent;
  let fixture: ComponentFixture<CoolersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoolersComponent]
    });
    fixture = TestBed.createComponent(CoolersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
