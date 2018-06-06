import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Entry} from 'contentful';
import {ContentfulService} from '../../services/contentful.service';
import {MainCarouselService} from '../../services/main-carousel.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ContactComponent implements OnInit {

  contactPage: Entry<any>;

  constructor(
    private contentfulService: ContentfulService,
    private mainCarouselService: MainCarouselService
  ) { }

  ngOnInit() {
    this.loadContactPage();
  }

  // Load specific Contact page from contentful API
  loadContactPage() {
    this.contentfulService.getContactPage()
      .then(contactPage => {
        this.contactPage = contactPage;
      })
      .then(asset => {
        this.contentfulService.getAsset(this.contactPage.fields.carouselImage.sys.id)
          .then(mainCarouselImage => {
            this.mainCarouselService.changeImage(mainCarouselImage.fields.file.url);
          });
      });
  }

}
