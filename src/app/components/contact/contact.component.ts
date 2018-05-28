import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Entry} from 'contentful';
import {ContentfulService} from '../../services/contentful.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ContactComponent implements OnInit {

  private contactPage: Entry<any>;

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.loadContactPage();
  }

  // Load specific Contact page from contentful API
  loadContactPage() {
    this.contentfulService.getContactPage()
      .then(contactPage => {
        this.contactPage = contactPage;
      });
  }

}
