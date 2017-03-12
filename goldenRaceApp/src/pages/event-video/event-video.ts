import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LeagueModel, MatchModel, MatchResultModel} from "../league-bbva/league-bbva.model";

/*
  Generated class for the EventVideo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-event-video',
  templateUrl: 'event-video.html'
})
export class EventVideoPage {
  league: LeagueModel;
  matches_rm: Array<MatchResultModel>=[];
  matches: MatchResultModel;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.league = navParams.get('league');
    this.matches_rm= this.league.mr;
    this.matches = this.matches_rm[this.matches_rm.length-1];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventVideoPage');
  }

}
