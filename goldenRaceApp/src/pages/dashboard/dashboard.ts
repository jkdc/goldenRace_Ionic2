import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LeagueCalcioPage} from "../league-calcio/league-calcio";
import {LeaguePremierPage} from "../league-premier/league-premier";
import {LeagueBbvaPage} from "../league-bbva/league-bbva";
import {TimerService} from "../../providers/timer.service";

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
  providers: [TimerService]
})
export class DashboardPage {
  selectedLeague: any;
  ligue: Array<{league: any,title: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public timer:TimerService) {
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
    this.navCtrl.setRoot(item.league, {timer: this.timer}, { animate: true, direction: 'forward' });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  //  console.log(this.timer.getTime());
  }

}
