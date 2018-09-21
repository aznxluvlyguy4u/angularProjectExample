import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalHealthDetailComponent } from './animal-health-detail.component';

describe('AnimalHealthDetailComponent', () => {
  let component: AnimalHealthDetailComponent;
  let fixture: ComponentFixture<AnimalHealthDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalHealthDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalHealthDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
