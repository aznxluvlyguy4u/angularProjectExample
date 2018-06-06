import {Component, OnInit} from '@angular/core';
import {MainCarouselService} from '../../services/main-carousel.service';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.scss'],
})
export class MainCarouselComponent implements OnInit {

  imageSrc: string;

  constructor(
    private mainCarouselService: MainCarouselService
  ) { }

  ngOnInit() {
    this.mainCarouselService.eventEmitter.subscribe(imageSrc => {
      this.imageSrc = imageSrc;
    });
  }
}
