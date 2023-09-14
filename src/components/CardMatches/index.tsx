import React from "react";

import { Container, ResultText, Separator, TeamName, TeamView } from "./styles";
import { Image } from "expo-image";

interface TeamsProps {
  crest: string;
  id: number;
  name: string;
  shortName: string;
  tla: string;
}
export interface MatchesProps {
  homeTeam: TeamsProps;
  awayTeam: TeamsProps;
  score: {
    fullTime: {
      home: number;
      away: number;
    };
  };
}

export function CardMatches({ awayTeam, homeTeam, score }: MatchesProps) {
  return (
    <Container>
      <TeamView>
        <TeamName>{homeTeam.tla}</TeamName>
        <Image
          source={{ uri: homeTeam.crest }}
          style={{ width: 40, height: 40, marginRight: 8 }}
        />
      </TeamView>
      <Separator>
        <ResultText>
          {score.fullTime.home} X {score.fullTime.away}{" "}
        </ResultText>
      </Separator>

      <TeamView>
        <Image
          source={{ uri: awayTeam.crest }}
          style={{ width: 38, height: 38, marginLeft: 8 }}
        />
        <TeamName>{awayTeam.tla}</TeamName>
      </TeamView>
    </Container>
  );
}
