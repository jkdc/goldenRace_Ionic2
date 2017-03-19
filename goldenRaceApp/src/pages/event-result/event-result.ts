import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {TimerService} from "../../providers/timer.service";
import {LeagueModel, MatchResultModel} from "../models/league.model";


@Component({
  selector: 'page-event-result',
  templateUrl: 'event-result.html'
})
export class EventResultPage {
  timer:TimerService;
  league: LeagueModel;
  matches_rm: Array<MatchResultModel>=[];
  matches: MatchResultModel;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.league = navParams.get('league');
    this.timer = navParams.get('timer');
    this.matches_rm = this.league.mr;
    this.matches = this.matches_rm[this.matches_rm.length - 1];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventResultPage');
  }

}
