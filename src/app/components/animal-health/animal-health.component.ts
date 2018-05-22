import { Component, OnInit } from '@angular/core';

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
  styleUrls: ['./animal-health.component.scss']
})
export class AnimalHealthComponent implements OnInit {

  private animalHealthArticles: AnimalHealthArticle[] = [
    {
      topic: 'DIERGEZONDHEID',
      title: 'ZWOEGERZIEKTE',
      image: 'assets/images/animal-health-article-1.jpg',
      caption: 'zwoegerziekte'
    },
    {
      topic: 'DIERGEZONDHEID',
      title: 'CL (CASEOUS LYMPHADENITIS)',
      image: 'assets/images/animal-health-article-2.jpg',
      caption: 'CL (caseous lymphadenitis)'
    },
    {
      topic: 'DIERGEZONDHEID',
      title: 'BRUCELLA MELITENSIS',
      image: 'assets/images/animal-health-article-3.jpg',
      caption: 'brucella melitensis'
    },
    {
      topic: 'DIERGEZONDHEID',
      title: 'SCRAPIE',
      image: 'assets/images/animal-health-article-4.jpg',
      caption: 'scrapie'
    }
  ];

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

  constructor() { }

  ngOnInit() {
  }

}
