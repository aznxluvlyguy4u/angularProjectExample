import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../services/contentful.service';
import { ActivatedRoute } from '@angular/router';
import { Entry } from 'contentful';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

  newsItems: Entry<any>[];
  newsItem: Entry<any>;
  newsItemImage: Entry<any>;

  constructor(
    private contentfulService: ContentfulService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.loadNewsItem();
    this.loadNewsItems();
  }

  loadNewsItems() {
    this.contentfulService.getNewsItems()
      .then(newsItems => {
        this.newsItems = newsItems;
      });
  }

  loadNewsItem() {
    this.activatedRoute.params.subscribe(params => {
      this.contentfulService.getNewsItem(params['id'])
        .then(newsItem => {
          this.newsItem = newsItem;
        })
        .then(asset => {
          this.contentfulService.getAsset(this.newsItem.fields.image.sys.id)
            .then(newsItemImage => {
              this.newsItemImage = newsItemImage;
            });
        });
    });
  }

}
