import { Component, OnInit } from '@angular/core';
import {Entry} from 'contentful';
import {ContentfulService} from '../../services/contentful.service';
import {MainCarouselService} from '../../services/main-carousel.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  newsItems: Entry<any>[] = [];
  mainCarouselImage = 'assets/images/sheeps-home@2x.jpg';

  constructor(
    private contentfulService: ContentfulService,
    private mainCarouselService: MainCarouselService
  ) { }

  ngOnInit() {
    this.loadNewsItems();
    this.loadMainCarouselImage();
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
