import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LeagueModel} from "../league-premier/league-premier.model";
import {EventMatchResultPage} from "../event-match-result/event-match-result";
import {EventUnderOverPage} from "../event-under-over/event-under-over";

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeagueBbvaPage');

  }

  extractRandom(arr){
    var index = Math.floor(Math.random() * arr.length);
    var result = arr[index];
    // remove item from the array
    arr.splice(index, 1);
    return(result);
  }

  makeWorkingDay(arr1, arr2) {
    var result = [];
    while (arr1.length) {
      if (arr1.length) {

      }
      if (arr2.length){
      //  result.push(extractRandom(arr2));
      }
    }
    return(result);
  }
  goToUnderOver(){
    this.navCtrl.setRoot(EventUnderOverPage, {}, { animate: true, direction: 'forward' });
  }
  goToMatchResult(){
    this.navCtrl.setRoot(EventMatchResultPage, {}, { animate: true, direction: 'forward' });
  }
}
