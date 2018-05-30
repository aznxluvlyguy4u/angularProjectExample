import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, RoutesRecognized} from '@angular/router';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.scss'],
})
export class MainCarouselComponent implements OnInit, OnDestroy {

  image: string;
  subscription: any;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.subscription = this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.image = data.state.root.firstChild.data.mainCarouselImage;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
