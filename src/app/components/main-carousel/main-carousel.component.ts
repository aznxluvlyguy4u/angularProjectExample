import {Component, OnInit, OnDestroy} from '@angular/core';
import {MainCarouselService} from '../../services/main-carousel.service';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.scss'],
})
export class MainCarouselComponent implements OnInit, OnDestroy {

  image: string;
  subscription: any;

  constructor(
    private mainCarouselService: MainCarouselService,
  ) { }

  ngOnInit() {
    this.image = this.mainCarouselService.getDefaultImageSrc();
    this.subscription = this.mainCarouselService.getEventEmitter()
      .subscribe(image => this.setImageSrc(image));
  }

  setImageSrc(image: string) {
    this.image = image;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
