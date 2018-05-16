import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../services/contentful.service';
import { Entry } from 'contentful';

interface Product {
  productImage: string;
  productName: string;
  productDescription: string;
}

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

  // Unused, for testing purpose only
  private productExamples: Product[] = [
    {
      productImage: 'assets/svg/dierregistratie.svg',
      productName: 'DIERREGISTRATIE',
      productDescription: 'Altijd beschikbaar, waar en wanneer u maar wilt.'
    },
    {
      productImage: 'assets/svg/diergezondheid.svg',
      productName: 'DIERGEZONDHEID',
      productDescription: 'De beste kwaliteit voor de scherpste tarieven.'
    },
    {
      productImage: 'assets/svg/fokkerij.svg',
      productName: 'FOKKERIJ',
      productDescription: 'Wij ondersteunen uw passie met innovatieve oplossingen.'
    }
  ];

  private newsItems: NewsItem[] = [
    {
      title: 'title 1',
      body: 'body 1',
      image: 'assets/images/nieuwsitem-01.jpg',
      caption: 'pretty image1'
    },
    {
      title: 'title 2',
      body: 'body 2',
      image: 'assets/images/nieuwsitem-02.jpg',
      caption: 'pretty image2'
    }
  ]

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
      this.contentfulService.getProducts()
      .then(products => {
        this.products = products;
        console.log(products);
      })
  }
}
