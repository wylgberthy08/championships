import React from "react";

import {
  Container,
  InfoView,
  PlayerName,
  TeamName,
  TotalGoals,
} from "./styles";
import { TeamView } from "../CardMatches/styles";
import { Image } from "expo-image";
import { Scorer } from "../../services/get-scores.service";

export function PlayerCard({ player, goals, team }: Scorer) {
  return (
    <Container>
      <InfoView>
        <PlayerName>{player.name}</PlayerName>
        <TotalGoals>{goals} Gols</TotalGoals>
      </InfoView>
      <TeamView>
        <Image source={{ uri: team.crest }} style={{ width: 30, height: 30 }} />
        <TeamName>{team.name}</TeamName>
      </TeamView>
    </Container>
  );
}
