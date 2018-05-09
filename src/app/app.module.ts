import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentfulService } from './services/contentful.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AnimalHealthComponent } from './components/animal-health/animal-health.component';
import { BreedingFarmComponent } from './components/breeding-farm/breeding-farm.component';
import { NewsComponent } from './components/news/news.component';
import { AboutComponent } from './components/about/about.component';
import { AnimalRegistrationComponent } from './components/animal-registration/animal-registration.component';
import { NewsItemComponent } from './components/news-item/news-item.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'animal-registration', component: AnimalRegistrationComponent, data: { title: 'Animal Registration' } },
  { path: 'animal-health', component: AnimalHealthComponent, data: { title: 'Animal Health' } },
  { path: 'breeding-farm', component: BreedingFarmComponent, data: { title: 'Breeding Farm' } },
  { path: 'news', component: NewsComponent, data: { title: 'News' } },
  { path: 'about', component: AboutComponent, data: { title: 'About' } },
  { path: 'contact', component: ContactComponent, data: { title: 'Contact'} }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NavbarComponent,
    AnimalHealthComponent,
    BreedingFarmComponent,
    NewsComponent,
    AboutComponent,
    AnimalRegistrationComponent,
    NewsItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [
    ContentfulService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
