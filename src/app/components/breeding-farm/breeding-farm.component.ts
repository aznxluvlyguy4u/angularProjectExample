import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Entry} from 'contentful';
import {ContentfulService} from '../../services/contentful.service';
import {MainCarouselService} from '../../services/main-carousel.service';

@Component({
  selector: 'app-breeding-farm',
  templateUrl: './breeding-farm.component.html',
  styleUrls: ['./breeding-farm.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BreedingFarmComponent implements OnInit {

  breedingFarmPage: Entry<any>;

  constructor(
    private contentfulService: ContentfulService,
    private mainCarouselService: MainCarouselService
  ) { }

  ngOnInit() {
    this.loadBreedingFarmPage();
  }

  // Load specific BreedingFarm page from contentful API
  loadBreedingFarmPage() {
    this.contentfulService.getBreedingFarmPage()
      .then(breedingFarmPage => {
        this.breedingFarmPage = breedingFarmPage;
      })
      .then(asset => {
        this.contentfulService.getAsset(this.breedingFarmPage.fields.carouselImage.sys.id)
          .then(mainCarouselImage => {
            this.mainCarouselService.changeImage(mainCarouselImage.fields.file.url);
          });
      });
  }

}
