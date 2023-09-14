import { api } from "../config/api";
export interface Player {
  id: number;
  name: string;
  firstName: string;
  lastName: string | null;
  dateOfBirth: string;
  nationality: string;
  position: string;
  shirtNumber: number | null;
  lastUpdated: string;
}

export interface Team {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
  address: string;
  website: string;
  founded: number;
  clubColors: string;
  venue: string;
  lastUpdated: string;
}

export interface Scorer {
  player: Player;
  team: Team;
  goals: number;
  assists?: number;
  penalties?: number;
}

interface Competition {
  id: number;
  name: string;
  code: string;
  type: string;
  emblem: string;
}

interface Season {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday: number;
  winner: Player | null;
  stages: string[];
}

interface Filters {
  season: string;
  limit: number;
}

interface DataStructure {
  count: number;
  filters: Filters;
  competition: Competition;
  season: Season;
  scorers: Scorer[];
}

export async function getScores(id: number): Promise<DataStructure> {
  try {
    const response = await api.get(`/competitions/${id}/scorers`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
