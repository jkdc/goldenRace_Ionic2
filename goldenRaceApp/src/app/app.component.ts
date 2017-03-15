import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar, Splashscreen } from 'ionic-native';

//import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { LeaguePremierPage } from "../pages/league-premier/league-premier";
import { LeagueCalcioPage } from "../pages/league-calcio/league-calcio";
import { LeagueBbvaPage } from "../pages/league-bbva/league-bbva";
import { DashboardPage } from "../pages/dashboard/dashboard";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = DashboardPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Dashboard', component: DashboardPage },
      { title: 'CALCIO LEAGUE', component: LeagueCalcioPage  },
      { title: 'PREMIERE LEAGUE', component: LeaguePremierPage },
      { title: 'BBVA LEAGUE', component: LeagueBbvaPage  },

    ];
    //let time = moment().format('HHmmss');
    //console.log(time);
    //this.initialzeTimer();
   // this.timer.initialzeTimer();
    // We subscribe to the dismiss observable of the service
   /* this.timer.dismiss.subscribe((value) => {
      console.log("Hacia pagina event video");

    });*/
  }

  ngOnInit() {

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }


}
