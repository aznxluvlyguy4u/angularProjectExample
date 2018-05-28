import {Component, OnInit} from '@angular/core';
import {MainCarouselService} from '../../services/main-carousel.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  // Unused, for testing purpose only
  navItems: any[] = [
    {
      routerLink: '/home',
      mainCarouselImage: 'assets/images/sheeps-home@2x.jpg',
      title: 'HOME'
    },
    {
      routerLink: '/animal-registration',
      mainCarouselImage: 'assets/images/sheeps-animal-health@2x.jpg',
      title: 'DIERENREGISTRATIE'
    },
    {
      routerLink: '/animal-health',
      mainCarouselImage: 'assets/images/sheeps-animal-health@2x.jpg',
      title: 'DIERENGEZONDHEID'
    },
    {
      routerLink: '/breeding-farm',
      mainCarouselImage: 'assets/images/sheeps-animal-health@2x.jpg',
      title: 'FOKKERIJ'
    },
    {
      routerLink: '/news',
      mainCarouselImage: 'assets/images/sheeps-animal-health@2x.jpg',
      title: 'NIEUWS'
    },
    {
      routerLink: '/about',
      mainCarouselImage: 'assets/images/sheeps-animal-health@2x.jpg',
      title: 'OVER NSFO'
    },
    {
      routerLink: '/contact',
      mainCarouselImage: 'assets/images/sheeps-animal-health@2x.jpg',
      title: 'CONTACTS'
    }
  ];

  constructor(
    private mainCarouselService: MainCarouselService,
    private location: Location
  ) {
  }

  ngOnInit() {
    this.mainCarouselService.setDefaultImageSrc(this.getMainCarouselImageByRoute(this.location.path()));
  }

  getMainCarouselImageByRoute(route?: string) {
    route = route ? route : '/home';
    const result = this.navItems.find(function( navItem ) {
      return navItem.routerLink === route;
    });

    return result.mainCarouselImage;
  }

  changeMainCarouselImage(image: string) {
    this.mainCarouselService.emitImageSrc(image);
  }

}
