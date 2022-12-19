import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sheet9Component } from './sheet9.component';

describe('Sheet9Component', () => {
  let component: Sheet9Component;
  let fixture: ComponentFixture<Sheet9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sheet9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sheet9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
