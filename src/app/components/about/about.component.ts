import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Entry} from 'contentful';
import {ContentfulService} from '../../services/contentful.service';
import {MainCarouselService} from '../../services/main-carousel.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AboutComponent implements OnInit {

  aboutPage: Entry<any>;

  constructor(
    private contentfulService: ContentfulService,
    private mainCarouselService: MainCarouselService
  ) { }

  ngOnInit() {
    this.loadAboutPage();
  }

  // Load specific BreedingFarm page from contentful API
  loadAboutPage() {
    this.contentfulService.getAboutPage()
      .then(aboutPage => {
        this.aboutPage = aboutPage;
      })
      .then(asset => {
        this.contentfulService.getAsset(this.aboutPage.fields.carouselImage.sys.id)
          .then(mainCarouselImage => {
            this.mainCarouselService.changeImage(mainCarouselImage.fields.file.url);
          });
      });
  }

}
