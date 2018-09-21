import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-news-list-item',
  templateUrl: './news-list-item.component.html',
  styleUrls: ['./news-list-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NewsListItemComponent implements OnInit {

  @Input() newsItem;
  constructor() { }

  ngOnInit() {
  }

}
