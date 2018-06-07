import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentfulService } from './services/contentful.service';
import { MainCarouselService } from './services/main-carousel.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MarkdownModule } from 'ngx-markdown';
import { NewsModule } from './modules/news/news.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AnimalHealthComponent } from './components/animal-health/animal-health.component';
import { BreedingFarmComponent } from './components/breeding-farm/breeding-farm.component';
import { AboutComponent } from './components/about/about.component';
import { AnimalRegistrationComponent } from './components/animal-registration/animal-registration.component';
import { MainCarouselComponent } from './components/main-carousel/main-carousel.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductComponent } from './components/product/product.component';
import { AnimalHealthArticleComponent } from './components/animal-health-article/animal-health-article.component';
import { BannerComponent } from './components/banner/banner.component';
import { LoginBarComponent } from './components/login-bar/login-bar.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { AnimalHealthDetailComponent } from './components/animal-health-detail/animal-health-detail.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'animal-registration', component: AnimalRegistrationComponent, data: {
    title: 'Animal Registration' }},
  { path: 'animal-health', component: AnimalHealthComponent, data: {
    title: 'Animal Health' }},
  { path: 'animal-health/:id', component: AnimalHealthDetailComponent, data: {
    title: 'Animal Health' }},
  { path: 'breeding-farm', component: BreedingFarmComponent, data: {
    title: 'Breeding Farm' }},
  { path: 'about', component: AboutComponent, data: {
    title: 'About' }},
  { path: 'contact', component: ContactComponent, data: {
    title: 'Contact' }},
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NavbarComponent,
    AnimalHealthComponent,
    BreedingFarmComponent,
    AboutComponent,
    AnimalRegistrationComponent,
    NewsItemComponent,
    MainCarouselComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    AnimalHealthArticleComponent,
    BannerComponent,
    LoginBarComponent,
    AnimalHealthDetailComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    CarouselModule.forRoot(),
    MarkdownModule.forRoot(),
    NewsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    ContentfulService,
    MainCarouselService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
