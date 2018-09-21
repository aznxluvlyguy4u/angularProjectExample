import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-animal-health-article',
  templateUrl: './animal-health-article.component.html',
  styleUrls: ['./animal-health-article.component.scss']
})
export class AnimalHealthArticleComponent implements OnInit {

  @Input() animalHealthArticle;
  constructor() { }

  ngOnInit() {
  }

  scrollToTop() {
    window.scroll(0, 500);
    // target.scrollIntoView();
  }
}
