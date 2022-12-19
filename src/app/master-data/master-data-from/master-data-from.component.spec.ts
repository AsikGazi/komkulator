import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDataFromComponent } from './master-data-from.component';

describe('MasterDataFromComponent', () => {
  let component: MasterDataFromComponent;
  let fixture: ComponentFixture<MasterDataFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterDataFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterDataFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
