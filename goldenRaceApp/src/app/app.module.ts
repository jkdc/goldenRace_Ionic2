import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { LeaguePremierPage } from "../pages/league-premier/league-premier";
import { LeagueCalcioPage } from "../pages/league-calcio/league-calcio";
import { LeagueBbvaPage } from "../pages/league-bbva/league-bbva";
import { FooterPage } from "../pages/footer/footer";
import { DashboardPage } from "../pages/dashboard/dashboard";
import { EventMatchResultPage } from "../pages/event-match-result/event-match-result";
import { EventUnderOverPage } from "../pages/event-under-over/event-under-over";

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    LeaguePremierPage,
    LeagueCalcioPage,
    LeagueBbvaPage,
    FooterPage,
    DashboardPage,
    EventMatchResultPage,
    EventUnderOverPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    LeaguePremierPage,
    LeagueCalcioPage,
    LeagueBbvaPage,
    FooterPage,
    DashboardPage,
    EventMatchResultPage,
    EventUnderOverPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
