import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlossyzComponent } from './glossyz.component';

describe('GlossyzComponent', () => {
  let component: GlossyzComponent;
  let fixture: ComponentFixture<GlossyzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlossyzComponent]
    });
    fixture = TestBed.createComponent(GlossyzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
