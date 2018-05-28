import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ContentfulService} from '../../services/contentful.service';
import {Entry} from 'contentful';

@Component({
  selector: 'app-animal-registration',
  templateUrl: './animal-registration.component.html',
  styleUrls: ['./animal-registration.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AnimalRegistrationComponent implements OnInit {

  animalRegistrationPage: Entry<any>;

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.loadAnimalRegistrationPage();
  }

  // Load specific AnimalRegistration page from contentful API
  loadAnimalRegistrationPage() {
    this.contentfulService.getAnimalRegistrationPage()
      .then(animalRegistrationPage => {
        this.animalRegistrationPage = animalRegistrationPage;
      });
  }
}
