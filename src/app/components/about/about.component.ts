import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Entry} from 'contentful';
import {ContentfulService} from '../../services/contentful.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AboutComponent implements OnInit {

  private aboutPage: Entry<any>;

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.loadAboutPage();
  }

  // Load specific BreedingFarm page from contentful API
  loadAboutPage() {
    this.contentfulService.getAboutPage()
      .then(aboutPage => {
        this.aboutPage = aboutPage;
      });
  }

}
