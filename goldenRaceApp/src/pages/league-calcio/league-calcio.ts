import { Component } from '@angular/core';
import {NavController, NavParams, ModalController} from 'ionic-angular';
import {LeagueService} from "../../providers/league.service";
import {TimerService} from "../../providers/timer.service";
import {EventIdService} from "../../providers/event.service";
import {LeagueModel, MatchModel, MatchResultModel, UnderOverModel} from "../models/league.model";
import {EventMatchResultPage} from "../event-match-result/event-match-result";
import {EventUnderOverPage} from "../event-under-over/event-under-over";
import {TeamModalPage} from "../team-modal/team-modal";


@Component({
  selector: 'page-league-calcio',
  templateUrl: 'league-calcio.html',
  providers: [LeagueService, TimerService, EventIdService]

})
export class LeagueCalcioPage {
  league_premier: LeagueModel;
  teams: any;
  matches: Array<MatchModel> = new Array<MatchModel>();
  match_mr: MatchResultModel = new MatchResultModel;
  match_uo: UnderOverModel = new UnderOverModel;
  matches_mr: Array<MatchResultModel> = [];
  matches_uo: Array<UnderOverModel> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public leagueService:LeagueService,public timer:TimerService,
              public event: EventIdService, public modalCtrl: ModalController) {}

  ionViewDidLoad() {

    this.matches_mr = [];
    this.matches_uo = [];
    this.league_premier = this.leagueService.getDataCalcio();
    this.teams = this.league_premier.teams;
    this.matches = this.leagueService.makeWorkingDay(this.teams);

    this.match_mr.id=this.event.getNewId();
    this.match_mr.matches=this.matches;
    this.matches_mr.push(this.match_mr);

    this.match_uo.id=this.event.getNewId();
    this.match_uo.matches=this.matches;

    this.league_premier.mr.push(this.match_mr);
    this.league_premier.uo.push(this.match_uo);
  }
  goToUnderOver(){
    if(!this.timer.isInit()){
      this.timer.initTimer();
    }
    this.navCtrl.setRoot(EventUnderOverPage, {league: this.league_premier, timer: this.timer}, { animate: true, direction: 'forward' });
  }
  goToMatchResult(){
    if(!this.timer.isInit()){
      this.timer.initTimer();
    }
    this.navCtrl.setRoot(EventMatchResultPage, {league: this.league_premier, timer: this.timer}, { animate: true, direction: 'forward' });
  }
  presentModal(event,team) {
    let myModal = this.modalCtrl.create(TeamModalPage,{team: team});
    myModal.present();
  }
}
