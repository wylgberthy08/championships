import { api } from "../config/api";

export interface Team {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
  }
  
  export interface TableItem {
    position: number;
    team: Team;
    playedGames: number;
    form: string;
    won: number;
    draw: number;
    lost: number;
    points: number;
    goalsFor: number;
    goalsAgainst: number;
    goalDifference: number;
  }
  
  interface StandingsItem {
    stage: string;
    type: string;
    group: string | null;
    table: TableItem[];
  }
  
  export interface StandingsResponse {
    standings: StandingsItem[];
  }

export async function getStandings(id: number): Promise<StandingsResponse> {
  try {
    const response = await api.get(`/competitions/${id}/standings`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
