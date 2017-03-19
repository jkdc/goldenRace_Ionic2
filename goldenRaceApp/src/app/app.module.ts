import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LeaguePremierPage } from "../pages/league-premier/league-premier";
import { LeagueCalcioPage } from "../pages/league-calcio/league-calcio";
import { LeagueBbvaPage } from "../pages/league-bbva/league-bbva";
import { DashboardPage } from "../pages/dashboard/dashboard";
import { EventMatchResultPage } from "../pages/event-match-result/event-match-result";
import { EventUnderOverPage } from "../pages/event-under-over/event-under-over";
import {LeagueBbvaService} from "../pages/league-bbva/league-bbva.service";
import {EventVideoPage} from "../pages/event-video/event-video";
import {TimerService} from "../providers/timer.service";
import {EventResultPage} from "../pages/event-result/event-result";
import {EventIdService} from "../providers/event.service";
import {LeagueService} from "../providers/league.service";
import {TeamModalPage} from "../pages/team-modal/team-modal";

@NgModule({
  declarations: [
    MyApp,
    LeaguePremierPage,
    LeagueCalcioPage,
    LeagueBbvaPage,
    DashboardPage,
    EventMatchResultPage,
    EventUnderOverPage,
    EventVideoPage,
    EventResultPage,
    TeamModalPage,

  ],
  imports: [
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LeaguePremierPage,
    LeagueCalcioPage,
    LeagueBbvaPage,
    DashboardPage,
    EventMatchResultPage,
    EventUnderOverPage,
    EventVideoPage,
    EventResultPage,
    TeamModalPage,
  ],
  providers: [LeagueService, TimerService, EventIdService,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
