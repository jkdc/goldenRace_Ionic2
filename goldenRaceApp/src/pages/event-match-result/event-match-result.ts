import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MatchModel, LeagueModel, MatchResultModel} from "../league-bbva/league-bbva.model";
import {EventUnderOverPage} from "../event-under-over/event-under-over";
import {EventVideoPage} from "../event-video/event-video";


/*
  Generated class for the EventMatchResult page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-event-match-result',
  templateUrl: 'event-match-result.html'
})
export class EventMatchResultPage {
  league: LeagueModel;
  matches: MatchResultModel;
  matches_mr: Array<MatchResultModel> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.league = navParams.get('league');
    //this.teams = this.league.teams;
    this.matches_mr = this.league.mr;
    this.matches = this.matches_mr[this.matches_mr.length-1];
    //this.id = this.league.id;
    console.log(this.matches.matches);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventMatchResultPage');
  }

  goToUnderOver(){
    this.navCtrl.setRoot(EventVideoPage/*EventUnderOverPage*/, {league: this.league}, { animate: true, direction: 'forward' });
  }
}
