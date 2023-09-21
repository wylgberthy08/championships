import React, { useEffect, useRef, useState } from "react";

import {
  ButtonFooter,
  CompetitionName,
  Container,
  FooterTable,
  Header,
  HeaderInfo,
  HeaderInfoView,
  HeaderTable,
  Title,
  SectionMatches,
  TableView,
  ScoresView,
  BackButton,
} from "./styles";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { getMatches } from "../../services/get-matches.service";
import { useNavigation, useRoute } from "@react-navigation/native";
import { CardMatches, MatchesProps } from "../../components/CardMatches";
import { PositionCard } from "../../components/PositionCard";
import { TableItem, getStandings } from "../../services/get-standings.service";
import { Scorer, getScores } from "../../services/get-scores.service";
import { PlayerCard } from "../../components/PlayerCard";

import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "react-query";

export function CompetitionDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  const { id, name }: any = route.params || {};

  const { data, isLoading: loadMatches } = useQuery(["matches", id], () =>
    getMatches(id)
  );
  const { data: classification, isLoading: loadClassification } = useQuery(
    ["classification", id],
    () => getStandings(id)
  );
  const { data: topScorers, isLoading: loadTopScorers } = useQuery(
    ["top-scorers", id],
    () => getScores(id)
  );

  const topTree = classification?.standings.flatMap((item) =>
    item.table.slice(0, 3)
  );

  function handleGoBack() {
    navigation.goBack();
  }

  function handleNavigateFullTable(id: number, name: string) {
    navigation.navigate("Classification", { id: id, name: name });
  }

  if (loadMatches && loadClassification && loadTopScorers) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator color="#000" size={40} />
      </View>
    );
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack}>
          <Ionicons name="arrow-back-outline" size={24} color="#fff" />
        </BackButton>
        <CompetitionName>{name}</CompetitionName>
      </Header>
      <SectionMatches>
        <Title>MATCHES</Title>
        <Animated.ScrollView
          style={[{ width: "100%" }]}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {data?.matches?.map((matche) => (
            <CardMatches
              key={matche.awayTeam.id}
              score={matche?.score}
              awayTeam={matche.awayTeam}
              homeTeam={matche.homeTeam}
            />
          ))}
        </Animated.ScrollView>
      </SectionMatches>
      <TableView>
        <HeaderTable>
          <Title>TOP 3</Title>
          <HeaderInfoView>
            <HeaderInfo>POS</HeaderInfo>
            <HeaderInfo>ClUB</HeaderInfo>
            <HeaderInfo>P</HeaderInfo>
            <HeaderInfo>GD</HeaderInfo>
            <HeaderInfo>PTS</HeaderInfo>
          </HeaderInfoView>
        </HeaderTable>
        <ScrollView>
          {topTree?.map((item) => (
            <PositionCard key={item.team.id} data={item} />
          ))}
        </ScrollView>
        <FooterTable>
          <ButtonFooter onPress={() => handleNavigateFullTable(id, name)}>
            <Title>Full Table {">>"} </Title>
          </ButtonFooter>
        </FooterTable>
      </TableView>
      <ScoresView>
        <Title>CHASERS</Title>
        <ScrollView horizontal>
          {topScorers?.scorers?.map((item) => (
            <PlayerCard
              key={item.player.id}
              player={item.player}
              goals={item.goals}
              team={item.team}
            />
          ))}
        </ScrollView>
      </ScoresView>
    </Container>
  );
}
