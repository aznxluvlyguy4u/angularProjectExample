import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ContentfulService} from '../../services/contentful.service';
import {Entry} from 'contentful';

interface AnimalHealthArticle {
  topic: string;
  title: string;
  image: string;
  caption: string;
}

interface AnimalHealthBanner {
  backgroundColor: string;
  color: string;
  title: string;
  icon: string;
  linkText: string;
  linkUrl: string;
}

@Component({
  selector: 'app-animal-health',
  templateUrl: './animal-health.component.html',
  styleUrls: ['./animal-health.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AnimalHealthComponent implements OnInit {

  private animalHealthArticles: Entry<any>[] = [];

  private animalHealthPage: Entry<any>;

  // private animalHealthArticles: AnimalHealthArticle[] = [
  //   {
  //     topic: 'DIERGEZONDHEID',
  //     title: 'ZWOEGERZIEKTE',
  //     image: 'assets/images/animal-health-article-1.jpg',
  //     caption: 'zwoegerziekte'
  //   },
  //   {
  //     topic: 'DIERGEZONDHEID',
  //     title: 'CL (CASEOUS LYMPHADENITIS)',
  //     image: 'assets/images/animal-health-article-2.jpg',
  //     caption: 'CL (caseous lymphadenitis)'
  //   },
  //   {
  //     topic: 'DIERGEZONDHEID',
  //     title: 'BRUCELLA MELITENSIS',
  //     image: 'assets/images/animal-health-article-3.jpg',
  //     caption: 'brucella melitensis'
  //   },
  //   {
  //     topic: 'DIERGEZONDHEID',
  //     title: 'SCRAPIE',
  //     image: 'assets/images/animal-health-article-4.jpg',
  //     caption: 'scrapie'
  //   }
  // ];

  private animalHealthBanners: AnimalHealthBanner[] = [
    {
      backgroundColor: '#f0f0f0',
      color: '#4a4a4a',
      title: 'AANMELDFORMULIER NSFO DIERGEZONDHEID',
      icon: 'assets/svg/dierregistratie.svg',
      linkText: 'Download: pdf 520 kb',
      linkUrl: 'zwoegerziekte'
    },
    {
      backgroundColor: '#459d68',
      color: '#ffffff',
      title: 'TARIEVEN',
      icon: 'assets/svg/noun-999157-grijs.svg',
      linkText: 'in combinatie met het Abonnement op NSFO Diergezondheid',
      linkUrl: 'zwoegerziekte'
    }
  ];

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.loadAnimalHealthArticles();
    this.loadAnimalHealthPage();
  }

  // Load specific page from contentful API
  loadAnimalHealthPage() {
    this.contentfulService.getAnimalHealthPage()
      .then(animalHealthPage => {
        this.animalHealthPage = animalHealthPage;
        console.log(animalHealthPage);
      });
  }

  // Load animalHealthArticles from contentful API
  loadAnimalHealthArticles() {
    this.contentfulService.getAnimalHealthArticles()
      .then(animalHealthArticles => {
        this.animalHealthArticles = animalHealthArticles;
        console.log(animalHealthArticles);
      });
  }
}
