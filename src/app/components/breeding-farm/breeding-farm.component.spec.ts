import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedingFarmComponent } from './breeding-farm.component';

describe('BreedingFarmComponent', () => {
  let component: BreedingFarmComponent;
  let fixture: ComponentFixture<BreedingFarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedingFarmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedingFarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
