import {Component} from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';
import {LeagueModel, UnderOverModel} from "../models/league.model";
import {TimerService} from "../../providers/timer.service";
import {EventVideoPage} from "../event-video/event-video";
import {EventMatchResultPage} from "../event-match-result/event-match-result";

/*
  Generated class for the EventUnderOver page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-event-under-over',
  templateUrl: 'event-under-over.html',
  providers: [TimerService]
})
export class EventUnderOverPage {
  timer: TimerService;
  league: LeagueModel;
  matches: UnderOverModel;
  matches_uo: Array<UnderOverModel> = [];
  in_event: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private alertCtrl: AlertController) {
    this.league = navParams.get('league');
    this.timer = navParams.get('timer');

    this.matches = this.league.uo[this.league.uo.length-1];

    this.in_event=false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventUnderOverPage');
  }
  ngDoCheck() {
    // called whenever Angular runs change detection
    if(this.timer.getTime()=="00:00" && !this.in_event){
      this.in_event=true;
   //   this.navCtrl.setRoot(EventVideoPage, {league: this.league,timer:this.timer}, { animate: true, direction: 'forward' });
    }
  }
  goToMatchResult(){
    this.navCtrl.setRoot(EventMatchResultPage, {league: this.league,timer:this.timer}, { animate: true, direction: 'forward' });
  }


  goTopresentPrompt(select) {
    let message;
    message = 'Enter your bet for '+select;
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
