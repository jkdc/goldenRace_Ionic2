import {Component, Input} from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';
import { LeagueModel, MatchResultModel} from "../models/league.model";
import {EventUnderOverPage} from "../event-under-over/event-under-over";
import {TimerService} from "../../providers/timer.service";
import {EventVideoPage} from "../event-video/event-video";


@Component({
  selector: 'page-event-match-result',
  templateUrl: 'event-match-result.html',
  providers: [TimerService]
})
export class EventMatchResultPage {
  @Input('counterValue') counterValue: number;
  @Input('timer')timer: TimerService;
  league: LeagueModel;
  matches: MatchResultModel;
  matches_mr: Array<MatchResultModel> = [];
  in_event: boolean;
  jornada: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    this.league = navParams.get('league');
    this.timer = navParams.get('timer');

    this.matches = this.league.mr[this.league.mr.length-1];
    this.in_event=false;
  }


  ngDoCheck() {
    // called whenever Angular runs change detection
    if(this.timer.getTime()=="00:00" && !this.in_event){
      this.in_event=true;
      this.navCtrl.setRoot(EventVideoPage, {league: this.league,timer:this.timer}, { animate: true, direction: 'forward' });
    }
  }
  ionViewDidLoad() {
    this.jornada = this.league.mr.length;
  }

  goToUnderOver(){

    this.navCtrl.setRoot(EventUnderOverPage, {league: this.league,timer:this.timer}, { animate: true, direction: 'forward' });
  }

  goTopresentPrompt(item1,item2) {
    let message;
    if(item2==null){
      message = 'Enter your bet for winner '+item1;
    }else{
      message = 'Enter your bet for tie between '+item1+' and '+item2
    }
    let alert = this.alertCtrl.create({
      title: 'Bet',
      message: message,

      inputs: [
        {
          name: 'bet',
          placeholder: '0.00',
          type: 'number',

        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: data => {
              //save bet
          }
        }
      ]
    });
    alert.present();
  }
}
