import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LengthconvertComponent } from './lengthconvert.component';

describe('LengthconvertComponent', () => {
  let component: LengthconvertComponent;
  let fixture: ComponentFixture<LengthconvertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LengthconvertComponent]
    });
    fixture = TestBed.createComponent(LengthconvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
