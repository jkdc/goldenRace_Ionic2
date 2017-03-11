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
  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Dashboard', component: DashboardPage },
      { title: 'My First List', component: ListPage },
      { title: 'PREMIERE LEAGUE', component: LeaguePremierPage },
      { title: 'CALCIO LEAGUE', component: LeagueCalcioPage  },
      { title: 'BBVA LEAGUE', component: LeagueBbvaPage  },

    ];

    this.league.name = "LEAGUE BBVA";
    this.league.description = "Best league";

    this.names_team =    ["Alaves","At.Bilbao","At.Madrid","Barcelona","Betis","Celta","Deportivo","Eibar","Español",
                        "Granada","Palmas","Leganes","Málaga","Osasuna","R.Madrid","R.Sociedad","Sevilla","Sporting"
                        ,"Valencia","Villarreal"];
    this.league.teams = [];

    for(var _i = 0; _i < this.names_team.length; _i++) {
      this.team = new TeamModel();
      this.team.id = _i;
      this.team.name = this.names_team[_i];
      this.team.image = "";
      this.league.teams.push(this.team);
      console.log(this.team);
    }
      console.log(this.league);

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
