import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../services/contentful.service';
import { Entry } from 'contentful';
import { MainCarouselService } from '../../services/main-carousel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Entry<any>[] = [];
  newsItems: Entry<any>[] = [];
  mainCarouselImage = 'assets/images/sheeps-home@2x.jpg';

  constructor(
    private contentfulService: ContentfulService,
    private mainCarouselService: MainCarouselService
  ) { }

  ngOnInit() {
    this.loadProducts();
    this.loadNewsItems();
    this.loadMainCarouselImage();
  }

  // Load products from contentful API
  loadProducts() {
    this.contentfulService.getProducts()
      .then(products => {
        this.products = products;
      });
  }

  // Load newsItems from contentful API
  loadNewsItems() {
    this.contentfulService.getNewsItems()
      .then(newsItems => {
        this.newsItems = newsItems;
      });
  }

  loadMainCarouselImage() {
    this.mainCarouselService.changeImage(this.mainCarouselImage);
  }
}
