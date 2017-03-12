import {Injectable} from "@angular/core";
import {LeagueModel, TeamModel, MatchModel} from "./league-bbva.model";


@Injectable()
export class LeagueBbvaService {
  league: LeagueModel = new LeagueModel();
  team: TeamModel = new TeamModel();
  names_team: string[];
  match: MatchModel = new MatchModel();
  matches: Array<MatchModel>;

  constructor() {
    this.matches = [];
  }

  retrieveData() {

  }

  getData() {
    this.league.name = "LEAGUE BBVA";
    this.league.description = "Best league";

    this.names_team =    ["Alaves","At.Bilbao","At.Madrid","Barcelona","Betis","Celta","Deportivo","Eibar","Español",
      "Granada","Palmas","Leganes","Málaga","Osasuna","R.Madrid","R.Sociedad","Sevilla","Sporting"
      ,"Valencia","Villarreal"];
    this.league.teams = [];
    this.league.mr = [];
    this.league.uo = [];

    for(var _i = 0; _i < this.names_team.length; _i++) {
      this.team = new TeamModel();
      this.team.id = _i;
      this.team.name = this.names_team[_i];
      this.team.image = "";
      this.league.teams.push(this.team);
     //console.log(this.team);
    }
   // console.log(this.league.teams);

    return this.league;
  }

  makeWorkingDay(array_teams) {
    var arr1 = array_teams.slice();//.copyWithin(0,array_teams.length/2), // copy array
    var  arr2 = arr1.splice((array_teams.length/2)-1,array_teams.length/2); // copy array again

    arr1.sort(function() { return 0.5 - Math.random();}); // shuffle arrays
    arr2.sort(function() { return 0.5 - Math.random();});

    while (arr1.length) {
      var name1 = arr1.pop(), // get the last value of arr1
        name2 = arr2[0] == name1 ? arr2.pop() : arr2.shift();
      //        ^^ if the first value is the same as name1,
      //           get the last value, otherwise get the first
      this.match = new MatchModel();
      this.match.team1 = name1;
      this.match.team2 = name2;
      do{
        this.match.goals_team1 = 0;
        this.match.goals_team2 = 0;
      }while(this.match.goals_team1+this.match.goals_team2>6);

      this.matches.push(this.match);
  //    console.log(name1.name + ' gets ' + name2.name );
    }
    return(this.matches);
  }

  getResultMatchs(league){
    let array = league.mr[league.mr.length-1];
    console.log("array");
    console.log(array);
    let goals_team1,goals_team2;

    for(let match of array.matches){
      do{
        goals_team1 = Math.floor(Math.random() * 6);
        goals_team2 = Math.floor(Math.random() * 6);
      }while(goals_team1+goals_team2>6);
      match.goals_team1=goals_team1;
      match.goals_team2=goals_team2;
    }
    league.mr[league.mr.length-1]=array;
   // league.uo[league.uo.length-1]=array;
    return league;
  }
}
