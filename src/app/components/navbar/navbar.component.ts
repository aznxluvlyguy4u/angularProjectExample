import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
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
      title: 'DIERENREGISTRATIE'
    },
    {
      routerLink: 'animal-health',
      title: 'DIERENGEZONDHEID'
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
      title: 'CONTACTS'
    }
  ];

  constructor() { }

  ngOnInit() { }
}
