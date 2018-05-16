import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalHealthArticleComponent } from './animal-health-article.component';

describe('AnimalHealthArticleComponent', () => {
  let component: AnimalHealthArticleComponent;
  let fixture: ComponentFixture<AnimalHealthArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalHealthArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalHealthArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
