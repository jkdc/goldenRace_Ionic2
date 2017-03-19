import {Component, trigger, state, transition, style, animate, keyframes} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LeagueCalcioPage} from "../league-calcio/league-calcio";
import {LeaguePremierPage} from "../league-premier/league-premier";
import {LeagueBbvaPage} from "../league-bbva/league-bbva";
import {TimerService} from "../../providers/timer.service";
import {Storage} from "@ionic/storage";

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
  providers: [TimerService, Storage],
  animations: [
    trigger('itemState', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        animate(1000, keyframes([
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
          style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
        ]))
      ]),
      transition('* => void', [
        animate(300, keyframes([
          style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
          style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
          style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
        ]))
      ])
    ])
  ]
})
export class DashboardPage {
  selectedLeague: any;
  league: Array<{league: any,title: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public timer:TimerService) {
    this.selectedLeague = navParams.get('league ');
    this.timer = new TimerService;
    this.league = [
      {league: LeagueCalcioPage,title:"CALCIO LEAGUE",icon:"football"},
      {league: LeaguePremierPage,title:"PREMIER LEAGUE",icon:"football"},
      {league: LeagueBbvaPage,title:"BBVA LEAGUE",icon:"football"}
    ];
  }


  itemTapped(event, item) {
    this.navCtrl.setRoot(item.league, {timer: this.timer}, { animate: true, direction: 'back' });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

}
