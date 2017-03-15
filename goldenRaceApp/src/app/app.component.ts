import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar, Splashscreen } from 'ionic-native';

//import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { LeaguePremierPage } from "../pages/league-premier/league-premier";
import { LeagueCalcioPage } from "../pages/league-calcio/league-calcio";
import { LeagueBbvaPage } from "../pages/league-bbva/league-bbva";
import { DashboardPage } from "../pages/dashboard/dashboard";
import {LeagueModel, TeamModel} from "../pages/league-bbva/league-bbva.model";

import moment from 'moment';
import {EventVideoPage} from "../pages/event-video/event-video";
import {TimerService} from "../providers/timer.service";
import {TimerPage} from "../pages/timer/timer";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = DashboardPage;
  pages: Array<{title: string, component: any}>;
  league: LeagueModel = new LeagueModel();
  team: TeamModel = new TeamModel();
  names_team: string[];
  //timer
  public timeLeft: number = 60;
  //time: number;
  @ViewChild(TimerPage) timer: TimerPage;
  constructor(
    public platform: Platform,
    public menu: MenuController,
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Dashboard', component: DashboardPage },
      { title: 'My First List', component: TimerPage },
      { title: 'PREMIERE LEAGUE', component: LeaguePremierPage },
      { title: 'CALCIO LEAGUE', component: LeagueCalcioPage  },
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

  ngOnInit() {/*
// use this if you want it to auto-start, hence the ViewChild import above.
    setTimeout(() => {
      this.timer.startTimer();
    }, 1000)*/
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
