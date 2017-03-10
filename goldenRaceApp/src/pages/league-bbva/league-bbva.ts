import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LeagueModel} from "../league-premier/league-premier.model";

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

}
