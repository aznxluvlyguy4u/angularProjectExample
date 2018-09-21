import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ContentfulService} from '../../services/contentful.service';
import {Entry} from 'contentful';
import {MainCarouselService} from '../../services/main-carousel.service';

@Component({
  selector: 'app-animal-registration',
  templateUrl: './animal-registration.component.html',
  styleUrls: ['./animal-registration.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AnimalRegistrationComponent implements OnInit {

  animalRegistrationPage: Entry<any>;

  constructor(
    private contentfulService: ContentfulService,
    private mainCarouselService: MainCarouselService
  ) { }

  ngOnInit() {
    this.loadAnimalRegistrationPage();
  }

  // Load specific AnimalRegistration page from contentful API
  loadAnimalRegistrationPage() {
    this.contentfulService.getAnimalRegistrationPage()
      .then(animalRegistrationPage => {
        this.animalRegistrationPage = animalRegistrationPage;
      })
      .then(asset => {
        this.contentfulService.getAsset(this.animalRegistrationPage.fields.carouselImage.sys.id)
          .then(mainCarouselImage => {
            this.mainCarouselService.changeImage(mainCarouselImage.fields.file.url);
          });
      });
  }
}
