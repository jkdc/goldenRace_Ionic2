import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {EventMatchResultPage} from "../event-match-result/event-match-result";
import {EventUnderOverPage} from "../event-under-over/event-under-over";
import {LeagueBbvaService} from "./league-bbva.service";
import {LeagueModel,MatchModel, MatchResultModel, UnderOverModel} from "./league-bbva.model";

/*
  Generated class for the LeagueBbva page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-league-bbva',
  templateUrl: 'league-bbva.html'
})
export class LeagueBbvaPage {
  league_bbva: LeagueModel;
  teams: any;
  matches: Array<MatchModel> = new Array<MatchModel>();
  match_mr: MatchResultModel = new MatchResultModel;
  match_uo: UnderOverModel = new UnderOverModel;
  matches_mr: Array<MatchResultModel> = [];
  matches_uo: Array<UnderOverModel> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public leagueService:LeagueBbvaService) {

  }

  ionViewDidLoad() {

    this.matches_mr = [];
    this.matches_uo = [];
    this.league_bbva = this.leagueService.getData();
    this.teams = this.league_bbva.teams;
    this.matches = this.leagueService.makeWorkingDay(this.teams);

    this.match_mr.id=1;
    this.match_mr.matches=this.matches;
    this.matches_mr.push(this.match_mr);

    this.match_uo.id=1;
    this.match_uo.matches=this.matches;

    this.league_bbva.mr.push(this.match_mr);//=this.matches_mr;
    this.league_bbva.uo.push(this.match_uo);

    console.log(this.league_bbva);

    this.league_bbva = this.leagueService.getResultMatchs(this.league_bbva);
    console.log(this.league_bbva);
    console.log('ionViewDidLoad LeagueBbvaPage');

  }


  goToUnderOver(){
    this.navCtrl.setRoot(EventUnderOverPage, {league: this.league_bbva}, { animate: true, direction: 'forward' });
  }
  goToMatchResult(){
    this.navCtrl.setRoot(EventMatchResultPage, {league: this.league_bbva}, { animate: true, direction: 'forward' });
  }
}
