import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent implements OnInit {

  // Unused, for testing purpose only
  navItems: any[] = [
    {
      routerLink: 'home',
      title: 'HOME'
    },
    {
      routerLink: 'animal-registration',
      title: 'DIERREGISTRATIE'
    },
    {
      routerLink: 'animal-health',
      title: 'DIERGEZONDHEID'
    },
    {
      routerLink: 'breeding-farm',
      title: 'FOKKERIJ'
    },
    {
      routerLink: 'news',
      title: 'NIEUWS'
    },
    {
      routerLink: 'about',
      title: 'OVER NSFO'
    },
    {
      routerLink: 'contact',
      title: 'CONTACT'
    }
  ];

  constructor() { }

  ngOnInit() { }
}
