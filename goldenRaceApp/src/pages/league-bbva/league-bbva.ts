import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {EventMatchResultPage} from "../event-match-result/event-match-result";
import {EventUnderOverPage} from "../event-under-over/event-under-over";
import {LeagueModel,MatchModel, MatchResultModel, UnderOverModel} from "../models/league.model";
import {TimerService} from "../../providers/timer.service";
import {EventIdService} from "../../providers/event.service";
import {LeagueService} from "../../providers/league.service";
import {Storage} from "@ionic/storage";

@Component({
  selector: 'page-league-bbva',
  templateUrl: 'league-bbva.html',
  providers: [LeagueService, TimerService, EventIdService,Storage]
})
export class LeagueBbvaPage {
  league_bbva: LeagueModel;
  teams: any;
  matches: Array<MatchModel> = new Array<MatchModel>();
  match_mr: MatchResultModel = new MatchResultModel;
  match_uo: UnderOverModel = new UnderOverModel;
  matches_mr: Array<MatchResultModel> = [];
  matches_uo: Array<UnderOverModel> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public leagueService:LeagueService,public timer:TimerService,
              public event: EventIdService) {
  }

  ionViewDidLoad() {
    this.matches_mr = [];
    this.matches_uo = [];
    this.league_bbva = this.leagueService.getData();
    this.teams = this.league_bbva.teams;
    this.matches = this.leagueService.makeWorkingDay(this.teams);

    this.event.getNewId().then(data => {
      this.match_mr.id=data;
    });
    this.match_mr.matches=this.matches;
    this.matches_mr.push(this.match_mr);

    this.event.getNewId().then(data => {
      this.match_uo.id=data;
    });
    this.match_uo.matches=this.matches;

    this.league_bbva.mr.push(this.match_mr);
    this.league_bbva.uo.push(this.match_uo);
  }


  goToUnderOver(){
    if(!this.timer.isInit()){
      this.timer.initTimer();
    }
    this.navCtrl.setRoot(EventUnderOverPage, {league: this.league_bbva, timer: this.timer}, { animate: true, direction: 'forward' });
  }
  goToMatchResult(){
    if(!this.timer.isInit()){
      this.timer.initTimer();
    }
    this.navCtrl.setRoot(EventMatchResultPage, {league: this.league_bbva, timer: this.timer}, { animate: true, direction: 'forward' });
  }
}
