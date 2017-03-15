import {Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LeagueModel, MatchResultModel} from "../models/league.model";
import {TimerService} from "../../providers/timer.service";
import {EventResultPage} from "../event-result/event-result";
import {LeagueService} from "../../providers/league.service";

@Component({
  selector: 'page-event-video',
  templateUrl: 'event-video.html',
  providers: [LeagueService,TimerService]
})
export class EventVideoPage {
  timer:TimerService;
  league: LeagueModel;
  matches_rm: Array<MatchResultModel>=[];
  matches: MatchResultModel;
  playerCount: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, public leagueService:LeagueService) {
    this.league = navParams.get('league');
    this.timer = navParams.get('timer');
    this.matches_rm = this.league.mr;
    this.matches = this.matches_rm[this.matches_rm.length - 1];
    this.playerCount = 0;
   // this.timer = new TimerService;
  }

  ionViewDidLoad() {
    this.leagueService.playMatch(this.league);
  }

ngOnInit(){
  //this.timer.clearTime();
  this.timer.setTime(14);
  this.timer.initTimer();
    console.log("llamada");
}
  onFinishPlayer(event){
    this.playerCount++;
    let video = event.srcElement;
    if(this.playerCount>2){
      this.navCtrl.setRoot(EventResultPage, {league: this.league,timer:this.timer}, { animate: true, direction: 'forward' });
    }else{
      video.play();
      //this.timer.startTimer();
      this.timer.clearTime();
      this.timer.setTime(14);
      this.timer.initTimer();
    }
  }
ngOnDestroy(){
    this.timer=null;
}
}
