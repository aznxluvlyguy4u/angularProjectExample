import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { NewsListComponent } from './news-list.component';
import { NewsDetailComponent }  from './news-detail.component';
import { NewsListItemComponent } from './news-list-item.component';

import { NewsService } from './news.service';
import { NewsRoutingModule } from './news-routing.module';

@NgModule({
  imports: [
    CommonModule,
    // NewsListComponent,
    // NewsDetailComponent,
    // NewsListItemComponent,
    NewsRoutingModule,
  ],
  declarations: [
    NewsListComponent,
    NewsListItemComponent,
    NewsDetailComponent
  ],
  providers: [ NewsService ]
})
export class NewsModule {}
