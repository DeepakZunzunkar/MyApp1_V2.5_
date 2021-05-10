import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //it keep track of when to show and hide loading indicator 
  //in view template we bind this property 
  showLoadingIndicator = true;

  constructor(private _router: Router) {

    this._router.events.subscribe((routerEvent: Event) => {

      if (routerEvent instanceof NavigationStart) {
        this.showLoadingIndicator = true;
      }
      if (routerEvent instanceof NavigationEnd ||
          routerEvent instanceof NavigationCancel ||
          routerEvent instanceof NavigationError ) {
        this.showLoadingIndicator = false;
      }

    });

  }


}
