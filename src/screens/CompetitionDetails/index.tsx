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

export function CompetitionDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  const { id, name }: any = route.params || {};

  const [matches, setMatches] = useState<MatchesProps[]>();
  const [classification, setClassification] = useState<TableItem[]>();
  const [topScorers, setTopScorers] = useState<Scorer[]>();

  async function fetchMatchesData(matchesId: number) {
    const response = await getMatches(matchesId);

    setMatches(response.matches);
  }

  function handleGoBack() {
    navigation.goBack();
  }

  function handleNavigateFullTable(id: number, name: string) {
    navigation.navigate("Classification", { id: id, name: name });
  }

  async function fetchScoresData(scoreId: number) {
    const response = await getScores(scoreId);
    setTopScorers(response.scorers);
  }

  async function fetchStandingsData(standingsId: number) {
    const response = await getStandings(standingsId);
    const topTree = response.standings.flatMap((item) =>
      item.table.slice(0, 3)
    );
    setClassification(topTree);
  }

  useEffect(() => {
    Promise.all([
      fetchMatchesData(id),
      fetchStandingsData(id),
      fetchScoresData(id),
    ]);
  }, []);

  if (!matches && !classification && !topScorers) {
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
          {matches?.map((matche) => (
            <CardMatches
              key={matche.awayTeam.id}
              score={matche.score}
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
          {classification?.map((item) => (
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
          {topScorers?.map((item) => (
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
