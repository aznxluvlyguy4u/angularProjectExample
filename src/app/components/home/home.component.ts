import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../services/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Entry<any>[] = [];

  newsItems: Entry<any>[] = [];

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.loadProducts();
    this.loadNewsItems();
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
}
