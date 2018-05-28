import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Entry} from 'contentful';
import {ContentfulService} from '../../services/contentful.service';

@Component({
  selector: 'app-breeding-farm',
  templateUrl: './breeding-farm.component.html',
  styleUrls: ['./breeding-farm.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BreedingFarmComponent implements OnInit {

  breedingFarmPage: Entry<any>;

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.loadBreedingFarmPage();
  }

  // Load specific BreedingFarm page from contentful API
  loadBreedingFarmPage() {
    this.contentfulService.getBreedingFarmPage()
      .then(breedingFarmPage => {
        this.breedingFarmPage = breedingFarmPage;
      });
  }

}
