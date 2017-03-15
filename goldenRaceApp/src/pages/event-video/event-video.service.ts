import {Injectable} from "@angular/core";
import {LeagueModel, TeamModel, MatchModel} from "./league-bbva.model";


@Injectable()
export class EventVideoService {
/*  league: LeagueModel = new LeagueModel();
  team: TeamModel = new TeamModel();
  names_team: string[];
  match: MatchModel = new MatchModel();
  matches: Array<MatchModel>;
*/
  count: number;
  playerSource: string;

  constructor() {
    //this.matches = [];
    this.playerSource="./assets/video/VIDEO.mp4";
    this.count = 0;
  }

  public toggleVideo() {
    this.count++;
    if(this.count<=6){
     // this.videoplayer.play();
    }else{
    }
  }
}
