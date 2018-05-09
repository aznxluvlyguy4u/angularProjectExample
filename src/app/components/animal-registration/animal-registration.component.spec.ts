import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalRegistrationComponent } from './animal-registration.component';

describe('AnimalRegistrationComponent', () => {
  let component: AnimalRegistrationComponent;
  let fixture: ComponentFixture<AnimalRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
