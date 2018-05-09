import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalHealthComponent } from './animal-health.component';

describe('AnimalHealthComponent', () => {
  let component: AnimalHealthComponent;
  let fixture: ComponentFixture<AnimalHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
