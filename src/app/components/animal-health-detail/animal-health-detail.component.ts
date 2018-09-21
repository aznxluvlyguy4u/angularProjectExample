import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ContentfulService} from '../../services/contentful.service';
import {ActivatedRoute} from '@angular/router';
import {Entry} from 'contentful';
import {MainCarouselService} from '../../services/main-carousel.service';

@Component({
  selector: 'app-animal-health-detail',
  templateUrl: './animal-health-detail.component.html',
  styleUrls: ['./animal-health-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AnimalHealthDetailComponent implements OnInit {

  animalHealthArticles: Entry<any>[];
  animalHealthArticle: Entry<any>;
  animalHealthArticleImage: Entry<any>;

  constructor(
    private contentfulService: ContentfulService,
    private mainCarouselService: MainCarouselService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loadAnimalHealthArticle();
    this.loadAnimalHealthArticles();
    this.loadMainCarouselImage();
  }

  // Load animalHealthArticle from contentful API
  loadAnimalHealthArticle() {
    this.activatedRoute.params.subscribe(params => {
      this.contentfulService.getAnimalHealthArticle(params['id'])
        .then(animalHealthArticle => {
          this.animalHealthArticle = animalHealthArticle;
        })
        .then(asset => {
          this.contentfulService.getAsset(this.animalHealthArticle.fields.image.sys.id)
            .then(animalHealthArticleImage => {
              this.animalHealthArticleImage = animalHealthArticleImage;
            });
        });
    });
  }

  // Load animalHealthArticles from contentful API
  loadAnimalHealthArticles() {
    this.contentfulService.getAnimalHealthArticles()
      .then(animalHealthArticles => {
        this.animalHealthArticles = animalHealthArticles;
      });
  }

  loadMainCarouselImage() {
    this.contentfulService.getAnimalHealthPage()
      .then(animalHealthPage => {
        this.contentfulService.getAsset(animalHealthPage.fields.carouselImage.sys.id)
          .then(mainCarouselImage => {
            this.mainCarouselService.changeImage(mainCarouselImage.fields.file.url);
          });
      });
  }
}
