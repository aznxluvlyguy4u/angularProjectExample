import { Component, OnInit } from '@angular/core';
import {Entry} from 'contentful';
import {ContentfulService} from '../../services/contentful.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  newsItems: Entry<any>[] = [];

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.loadNewsItems();
  }

  // Load newsItems from contentful API
  loadNewsItems() {
    this.contentfulService.getNewsItems()
      .then(newsItems => {
        this.newsItems = newsItems;
        console.log(newsItems);
      });
  }

}
