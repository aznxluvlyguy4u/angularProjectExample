import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsDetailComponent } from './news-detail.component';
import { NewsListComponent } from './news-list.component';


const newsRoutes: Routes = [
  { path: 'news', component: NewsListComponent, data: { title: 'News', mainCarouselImage: 'assets/images/sheeps-animal-health@2x.jpg' }},
  { path: 'news/:id', component: NewsDetailComponent, data: { title: 'News', mainCarouselImage: 'assets/images/sheeps-animal-health@2x.jpg' }},
];

@NgModule({
  imports: [
    RouterModule.forChild(newsRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class NewsRoutingModule { }
