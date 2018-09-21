import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { NewsListComponent } from './news-list.component';
import { NewsDetailComponent }  from './news-detail.component';
import { NewsListItemComponent } from './news-list-item.component';

import { NewsRoutingModule } from './news-routing.module';
import {MarkdownModule} from 'ngx-markdown';

@NgModule({
  imports: [
    CommonModule,
    NewsRoutingModule,
    MarkdownModule.forChild(),
  ],
  declarations: [
    NewsListComponent,
    NewsListItemComponent,
    NewsDetailComponent
  ],
  providers: []
})
export class NewsModule {}
