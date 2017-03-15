import {Component, Input, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import moment from 'moment';
import {EventVideoPage} from "../event-video/event-video";
import {ITimer} from "./itimer";
import {LeagueModel} from "../league-bbva/league-bbva.model";
import {Timer2Service} from "./timer.service";

/*
  Generated class for the Timer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-timer',
  templateUrl: 'timer.html',
  providers: [Timer2Service]
})
export class TimerPage {

  league: LeagueModel;
  constructor(public navCtrl: NavController, public navParams: NavParams,public timer:Timer2Service) {
    this.league = navParams.get('league');
    if(this.timer.getTime()==null){
      this.timer.initTimer();
    }

  }
 /* ngOnInit() {
    if(this.timer==null){
      this.initTimer();
    }

  }*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimerPage');
   // this.navCtrl.setRoot(EventVideoPage,{league: this.league});
   // console.log(this.timer.getTime());

  }

}
