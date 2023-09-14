import React from "react";

import { Container, TextInfo, ViewNameAndCrest } from "./styles";
import { Image } from "expo-image";
import { Team } from "../../services/get-standings.service";

interface PositionCardProps {
  position: number;
  team: Team;
  playedGames: number;
  points: number;
  goalsFor: number;
}

interface Props {
  data: PositionCardProps;
}
export function PositionCard({ data }: Props) {
  return (
    <Container>
      <TextInfo>{data.position}</TextInfo>
      <ViewNameAndCrest>
        <Image
          source={{ uri: data.team.crest }}
          style={{ width: 42, height: 42 }}
        />
        <TextInfo>{data.team.tla}</TextInfo>
      </ViewNameAndCrest>
      <TextInfo>{data.playedGames}</TextInfo>
      <TextInfo>{data.goalsFor}</TextInfo>
      <TextInfo>{data.points}</TextInfo>
    </Container>
  );
}
