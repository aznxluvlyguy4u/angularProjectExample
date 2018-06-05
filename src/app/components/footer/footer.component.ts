import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  backgroundImage = 'assets/png/nsfoFooter@2x.png';

  constructor() { }

  ngOnInit() {
  }

}
