import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MainCarouselService} from '../../services/main-carousel.service';
import {ContentfulService} from '../../services/contentful.service';
import {Entry} from 'contentful';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SignUpComponent implements OnInit {

  signUpPage: Entry<any>;

  constructor(
    private contentfulService: ContentfulService,
    private mainCarouselService: MainCarouselService
  ) { }

  ngOnInit() {
    this.loadSignUpPage();
  }

  loadSignUpPage() {
    this.contentfulService.getSignUpPage()
      .then(signUpPage => {
        this.signUpPage = signUpPage;
      })
      .then(asset => {
        this.contentfulService.getAsset(this.signUpPage.fields.carouselImage.sys.id)
          .then(mainCarouselImage => {
            this.mainCarouselService.changeImage(mainCarouselImage.fields.file.url);
          });
      });
  }
}
