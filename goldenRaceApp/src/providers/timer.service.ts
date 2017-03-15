import { Injectable } from '@angular/core';

import {ITimer} from "./itimer";

@Injectable()
export class TimerService {
  public timer: ITimer;
  public timeInSeconds: number;
  public init:boolean;
  public clear:any;

  constructor() {

    this.init=false;
    if (!this.timeInSeconds) {
      this.timeInSeconds = 5;
    }

    this.timer = <ITimer>{
      seconds: this.timeInSeconds,
      runTimer: false,
      hasStarted: false,
      hasFinished: false,
      secondsRemaining: this.timeInSeconds
    };

    this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);

  }

  hasFinished() {
    return this.timer.hasFinished;
  }

  initTimer() {

    this.init=true;
    if (!this.timeInSeconds) {
      this.timeInSeconds = 5;
    }
/*
    this.timer = <ITimer>{
      seconds: this.timeInSeconds,
      runTimer: false,
      hasStarted: false,
      hasFinished: false,
      secondsRemaining: this.timeInSeconds
    };

    this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);*/
    this.startTimer();
  }

  startTimer() {
    this.timer.hasStarted = true;
    this.timer.runTimer = true;
    this.timerTick();
  }

  timerTick() {
    this.clear=setTimeout(() => {
      if (!this.timer.runTimer) {
        clearInterval(this.clear);
        return;
      }
      this.timer.secondsRemaining--;
      this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
      if (this.timer.secondsRemaining > 0) {
        this.timerTick();
      }
      else {
        this.timer.hasFinished = true;
        //  this.navCtrl.setRoot(EventVideoPage,{league: this.league});
      }
    }, 1000);
  }

  getSecondsAsDigitalClock(inputSeconds: number) {
    var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);
    var hoursString = '';
    var minutesString = '';
    var secondsString = '';
    hoursString = (hours < 10) ? "0" + hours : hours.toString();
    minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
    secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
    // console.log(hoursString + ':' + minutesString + ':' + secondsString);
    return minutesString + ':' + secondsString;
  }
  getTime(){
    if(this.timer!=null){
      return this.timer.displayTime;
    }
    return null;
  }

  isInit(){
    return this.init;
  }

  setTime(time){
    this.timeInSeconds=time;
    this.timer.seconds=time;
    this.timer.secondsRemaining=time;
  }
  clearTime(){
    clearInterval(this.clear);

  }
}
