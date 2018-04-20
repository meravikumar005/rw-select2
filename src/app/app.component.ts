import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appData:any;
  constructor() {
    this.appData = [
      {
        id:1,
        value:"rankwatch.com"
      },
      {
        id:2,
        value:"flipkart.com"
      },
      {
        id:3,
        value:"instagram.com"
      },
      {
        id:4,
        value:"twitter.com"
      },
      {
        id:5,
        value:"linkedin.com"
      }
    ];
  }

  public selectedProject($event) {

  }
}

