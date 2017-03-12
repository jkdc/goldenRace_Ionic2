import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LeagueModel, MatchResultModel, UnderOverModel} from "../league-bbva/league-bbva.model";
import {EventMatchResultPage} from "../event-match-result/event-match-result";

/*
  Generated class for the EventUnderOver page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-event-under-over',
  templateUrl: 'event-under-over.html'
})
export class EventUnderOverPage {
  league: LeagueModel;
  matches: UnderOverModel;
  matches_uo: Array<UnderOverModel> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.league = navParams.get('league');
    //this.teams = this.league.teams;
    this.matches_uo = this.league.uo;
    this.matches = this.matches_uo[this.matches_uo.length-1];
    //this.id = this.league.id;
    console.log(this.matches.matches);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventUnderOverPage');
  }

  goToMatchResult(){
    this.navCtrl.setRoot(EventMatchResultPage, {league: this.league}, { animate: true, direction: 'forward' });
  }
}
