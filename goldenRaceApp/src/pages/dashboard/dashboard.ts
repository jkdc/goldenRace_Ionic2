import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LeagueCalcioPage} from "../league-calcio/league-calcio";
import {LeaguePremierPage} from "../league-premier/league-premier";
import {LeagueBbvaPage} from "../league-bbva/league-bbva";

/*
  Generated class for the Dashboard page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  selectedLeague: any;
  icons: string[];
  ligue: Array<{league: any,title: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedLeague = navParams.get('league ');

    this.ligue = [
      {league: LeagueCalcioPage,title:"CALCIO LEAGUE",icon:"football"},
      {league: LeaguePremierPage,title:"PREMIER LEAGUE",icon:"football"},
      {league: LeagueBbvaPage,title:"BBVA LEAGUE",icon:"football"}
    ];
  }


  itemTapped(event, item) {
    console.log(item);
    console.log(this.selectedLeague);
    //this.navCtrl.push(item.league);
    this.navCtrl.setRoot(item.league)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

}
