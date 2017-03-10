
export class TeamModel {
  id: number;
  name: string;
  image: string;
}

export class LeagueModel {
  name: string;
  image: string;
  description: string;
  teams: Array<TeamModel>;
  mr: Array<MatchResultModel>;
  uo: Array<UnderOverModel>;

}

export class MatchModel {
  team1: TeamModel;
  team2: TeamModel;
  goal_team1: number;
  goal_team2: number;
  bet: string;
}

export class MatchResultModel {
  matches: Array<MatchModel>;
}

export class UnderOverModel {
  matches: Array<MatchModel>;
}

