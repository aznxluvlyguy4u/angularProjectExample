import { TestBed, inject } from '@angular/core/testing';

import { MainCarouselService } from './main-carousel.service';

describe('CarouselService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainCarouselService]
    });
  });

  it('should be created', inject([MainCarouselService], (service: MainCarouselService) => {
    expect(service).toBeTruthy();
  }));
});
