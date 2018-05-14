import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../services/contentful.service';
import { Entry } from 'contentful';


interface NewsItem {
  title: string;
  body: string;
  image: string;
  caption: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private products: Entry<any>[] = [];

  newsitem1: NewsItem = {
    title: 'title 1',
    body: 'body 1',
    image: 'assets/images/nieuwsitem-01.jpg',
    caption: 'pretty image1'
  }

  newsitem2: NewsItem = {
    title: 'title 2',
    body: 'body 2',
    image: 'assets/images/nieuwsitem-02.jpg',
    caption: 'pretty image2'
  }

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
      this.contentfulService.getProducts()
      .then(products => {
        this.products = products;
        console.log(products);
      })
  }

}
