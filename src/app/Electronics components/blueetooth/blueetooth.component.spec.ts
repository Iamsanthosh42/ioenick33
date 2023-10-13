import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueetoothComponent } from './blueetooth.component';

describe('BlueetoothComponent', () => {
  let component: BlueetoothComponent;
  let fixture: ComponentFixture<BlueetoothComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlueetoothComponent]
    });
    fixture = TestBed.createComponent(BlueetoothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
