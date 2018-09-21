import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MainCarouselService} from '../../services/main-carousel.service';
import {ContentfulService} from '../../services/contentful.service';
import {Entry} from 'contentful';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DownloadsComponent implements OnInit {

  downloadsPage: Entry<any>;

  constructor(
    private contentfulService: ContentfulService,
    private mainCarouselService: MainCarouselService
  ) { }

  ngOnInit() {
    this.loadDownloadsPage();
  }

  // Load specific Downloads page from contentful API
  loadDownloadsPage() {
    this.contentfulService.getDownloadsPage()
      .then(downloadsPage => {
        this.downloadsPage = downloadsPage;
      })
      .then(asset => {
        this.contentfulService.getAsset(this.downloadsPage.fields.carouselImage.sys.id)
          .then(mainCarouselImage => {
            this.mainCarouselService.changeImage(mainCarouselImage.fields.file.url);
          });
      });
  }

}
