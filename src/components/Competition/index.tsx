import React from "react";
import { Image } from "expo-image";

import { CompetitionName, Container } from "./styles";

export interface CompetitionItem {
  id?: number;
  name: string;
  emblem: string;
  onPress: () => void;
}

export function Competition({ name, emblem, onPress }: CompetitionItem) {
  return (
    <Container onPress={onPress}>
      <CompetitionName>{name}</CompetitionName>
      <Image source={{ uri: emblem }} style={{ width: 40, height: 40 }} />
    </Container>
  );
}
