import {Injectable} from "@angular/core";
import {LeagueModel, TeamModel, MatchModel} from "../pages/models/league.model";

@Injectable()
export class LeagueService {
  league: LeagueModel = new LeagueModel();
  team: TeamModel = new TeamModel();
  names_team_calcio: string[];
  names_team_premier: string[];
  names_team_bbva: string[];

  match: MatchModel = new MatchModel();
  matches: Array<MatchModel>;

  constructor() {
    this.matches = [];
  }

  getData() {
    this.league.name = "LEAGUE BBVA";
    this.league.description = "Best league";

    this.names_team_bbva = ["Alaves", "At.Bilbao", "At.Madrid", "Barcelona", "Betis", "Celta", "Deportivo", "Eibar", "Español",
      "Granada", "Palmas", "Leganes", "Málaga", "Osasuna", "R.Madrid", "R.Sociedad", "Sevilla", "Sporting"
      , "Valencia", "Villarreal"];
    this.league.teams = [];
    this.league.mr = [];
    this.league.uo = [];

    for (var _i = 0; _i < this.names_team_bbva.length; _i++) {
      this.team = new TeamModel();
      this.team.id = _i;
      this.team.image = './assets/img/escudo.PNG';
      this.team.name = this.names_team_bbva[_i];
      this.team.image = "";
      this.league.teams.push(this.team);
    }

    return this.league;
  }

  getDataCalcio() {
    this.league.name = "LEAGUE BBVA";
    this.league.description = "Best league";

    this.names_team_calcio = ["Atalanta", "Bologna", "Cagliari", "Chievo", "Crotone", "Empoli", "Fiorentina", "Genoa", "Inter",
      "Juventus", "Lazio", "Milan", "Napoli", "Palermo", "Pescara", "Roma", "Sampdoria", "Sassuolo"
      , "Torino", "Udinese"];
    this.league.teams = [];
    this.league.mr = [];
    this.league.uo = [];

    for (var _i = 0; _i < this.names_team_calcio.length; _i++) {
      this.team = new TeamModel();
      this.team.id = _i;
      this.team.image = './assets/img/escudo.PNG';
      this.team.name = this.names_team_calcio[_i];
      this.team.image = "";
      this.league.teams.push(this.team);
    }

    return this.league;
  }

  getDataPremier() {
    this.league.name = "LEAGUE BBVA";
    this.league.description = "Best league";

    this.names_team_premier = ["Arsenal", "Bournemouth", "Burnley", "Chelsea", "C.Palace", "Everton", "Hull", "Leicester", "Liverpool",
      "Man.City", "Man.Utd", "Middlesbrough", "Southampton", "Stoke", "Sunderland", "Swansea", "Spurs", "Watford"
      , "West Brom", "West Ham"];
    this.league.teams = [];
    this.league.mr = [];
    this.league.uo = [];

    for (var _i = 0; _i < this.names_team_premier.length; _i++) {
      this.team = new TeamModel();
      this.team.id = _i;
      this.team.name = this.names_team_premier[_i];
      this.team.image = './assets/img/escudo.PNG';
      this.league.teams.push(this.team);
    }

    return this.league;
  }

  makeWorkingDay(array_teams) {
    var arr1 = array_teams.slice(); // copy array
    var arr2 = arr1.splice((array_teams.length / 2) - 1, array_teams.length / 2); // copy array again

    arr1.sort(function () {
      return 0.5 - Math.random();
    });
    arr2.sort(function () {
      return 0.5 - Math.random();
    });

    while (arr1.length) {
      var name1 = arr1.pop();
      var name2 = arr2[0] == name1 ? arr2.pop() : arr2.shift();
      this.match = new MatchModel();
      this.match.team1 = name1;
      this.match.team2 = name2;
      do {
        this.match.goals_team1 = 0;
        this.match.goals_team2 = 0;
      } while (this.match.goals_team1 + this.match.goals_team2 > 6);

      this.matches.push(this.match);
    }
    return (this.matches);
  }

  getResultMatchs(league) {
    let array = league.mr[league.mr.length - 1];
    console.log("array");
    console.log(array);
    let goals_team1, goals_team2;

    for (let match of array.matches) {
      do {
        goals_team1 = Math.floor(Math.random() * 6);
        goals_team2 = Math.floor(Math.random() * 6);
      } while (goals_team1 + goals_team2 > 6);
      match.goals_team1 = goals_team1;
      match.goals_team2 = goals_team2;
    }
    league.mr[league.mr.length - 1] = array;
    return league;
  }

  playMatch(league) {
    let waitTime = 13500;
    let count = 0;
    let team;
    let array = league.mr[league.mr.length - 1];

    let goals_team1 = 0;
    let goals_team2 = 0;
    let times = setInterval(() => {
      count++;
      if (count > 6) {
        clearInterval(times);
        return league;
      } else {
        for (let match of league.mr[league.mr.length - 1].matches) {
          if (match.goals_team1 + match.goals_team2 <= 6) {
            team = Math.floor(Math.random() * 2) + 1;
            if (team == 1) {
              match.goals_team1++;
            } else if (team == 2) {
              match.goals_team2++;
            }
          }
        }
      }

    }, waitTime);

    return league;
  }

}

