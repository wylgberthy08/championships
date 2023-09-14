import { api } from "../config/api";
interface Filters {
  season: string;
  matchday: string;
}

interface Coach {
  id: number;
  name: string;
  nationality: string;
}

interface Team {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
  coach: Coach;
  leagueRank: number;
  formation: string;
  lineup: any[];
  bench: any[];
}

interface Score {
  fullTime: {
    home: number;
    away: number;
  };
}

export interface MatchResponse {
  homeTeam: Team;
  awayTeam: Team;
  score: Score;
}
export async function getMatches(id: number) {
  try {
    const response = await api.get(`/competitions/${id}/matches`, {
      params: {
        matchday:23,
      },
      headers: {
        "X-Unfold-Goals": "true",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
