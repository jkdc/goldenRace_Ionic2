import { Component } from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {TeamModel} from "../models/league.model";

/*
  Generated class for the TeamModal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-team-modal',
  templateUrl: 'team-modal.html'
})
export class TeamModalPage {
  team: TeamModel;
  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl: ViewController) {
    this.team = navParams.get('team');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamModalPage');
  }
  close(){

}
  dismiss(data) {
    this.viewCtrl.dismiss(data);
  }
}
