import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ContentfulService} from '../../services/contentful.service';
import {Entry} from 'contentful';
import {MainCarouselService} from '../../services/main-carousel.service';

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

  animalHealthArticles: Entry<any>[] = [];

  animalHealthPage: Entry<any>;

  animalHealthBanners: AnimalHealthBanner[] = [
    {
      backgroundColor: '#f0f0f0',
      color: '#4a4a4a',
      title: 'AANMELDFORMULIER NSFO DIERGEZONDHEID',
      icon: 'assets/svg/dierregistratie.svg',
      linkText: 'Download: pdf 520 kb',
      linkUrl: 'https://assets.ctfassets.net/ab1wht89h7y6/45uzOdpvNu0mKosms6AqMU/932854a994e061efc4fdb15762eae312/ZWOF012-5__aanmelden_NSFO_Diergezondheid_.pdf'
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

  constructor(
    private contentfulService: ContentfulService,
    private mainCarouselService: MainCarouselService
  ) { }

  ngOnInit() {
    this.loadAnimalHealthArticles();
    this.loadAnimalHealthPage();
  }

  // Load specific AnimalHealth page from contentful API
  loadAnimalHealthPage() {
    this.contentfulService.getAnimalHealthPage()
      .then(animalHealthPage => {
        this.animalHealthPage = animalHealthPage;
      })
      .then(asset => {
        if (typeof this.animalHealthPage.fields.carouselImage !== 'undefined') {
          this.contentfulService.getAsset(this.animalHealthPage.fields.carouselImage.sys.id)
            .then(mainCarouselImage => {
              this.mainCarouselService.changeImage(mainCarouselImage.fields.file.url);
            });
        }
      });
  }

  // Load animalHealthArticles from contentful API
  loadAnimalHealthArticles() {
    this.contentfulService.getAnimalHealthArticles()
      .then(animalHealthArticles => {
        this.animalHealthArticles = animalHealthArticles;
      });
  }
}
