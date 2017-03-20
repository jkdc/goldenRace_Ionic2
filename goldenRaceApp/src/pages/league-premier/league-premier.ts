import { Component } from '@angular/core';
import {NavController, NavParams, ActionSheetController} from 'ionic-angular';
import {LeagueService} from "../../providers/league.service";
import {TimerService} from "../../providers/timer.service";
import {EventIdService} from "../../providers/event.service";
import {LeagueModel, MatchModel, MatchResultModel, UnderOverModel} from "../models/league.model";
import {EventUnderOverPage} from "../event-under-over/event-under-over";
import {EventMatchResultPage} from "../event-match-result/event-match-result";
import {Storage} from "@ionic/storage";

@Component({
  selector: 'page-league-premier',
  templateUrl: 'league-premier.html',
  providers: [LeagueService, TimerService, EventIdService,Storage]

})
export class LeaguePremierPage {
  league_premier: LeagueModel;
  teams: any;
  matches: Array<MatchModel> = new Array<MatchModel>();
  match_mr: MatchResultModel = new MatchResultModel;
  match_uo: UnderOverModel = new UnderOverModel;
  matches_mr: Array<MatchResultModel> = [];
  matches_uo: Array<UnderOverModel> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public leagueService:LeagueService,public timer:TimerService, public event: EventIdService,public actionSheetCtrl: ActionSheetController) {

  }

  ionViewDidLoad() {
    this.matches_mr = [];
    this.matches_uo = [];
    this.league_premier = this.leagueService.getDataPremier();
    this.teams = this.league_premier.teams;
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
  goToItemTapped(event,item){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Team',
      buttons: [
        {
          text: 'ID:: '+item.id,
        },
        {
          text: 'Team: '+item.name,
        }
              ]
    });
    actionSheet.present();
    actionSheet._cssClass

  }
}
