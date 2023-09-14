import React, { useEffect, useState } from "react";

import {
  BackButton,
  CompetitionName,
  Container,
  Header,
  HeaderInfo,
  HeaderInfoView,
  HeaderTable,
  TableView,
  Title,
} from "./styles";
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { TableItem, getStandings } from "../../services/get-standings.service";
import { PositionCard } from "../../components/PositionCard";

import { Ionicons } from "@expo/vector-icons";

export function Classification() {
  const route = useRoute();
  const navigation = useNavigation();
  const { id, name }: any = route.params || {};
  const [classification, setClassification] = useState<TableItem[]>();

  async function fetchStandingsData(standingsId: number) {
    const response = await getStandings(standingsId);

    setClassification(response.standings.flatMap((item) => item.table));
  }

  function handleGoBack() {
    navigation.goBack();
  }

  useEffect(() => {
    fetchStandingsData(id);
  }, []);

  if (!classification) {
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

      <TableView>
        <HeaderTable>
          <Title>table</Title>
          <HeaderInfoView>
            <HeaderInfo>POS</HeaderInfo>
            <HeaderInfo>ClUB</HeaderInfo>
            <HeaderInfo>P</HeaderInfo>
            <HeaderInfo>GD</HeaderInfo>
            <HeaderInfo>PTS</HeaderInfo>
          </HeaderInfoView>
        </HeaderTable>
        <FlatList
          data={classification}
          renderItem={({ item }) => <PositionCard data={item} />}
        />
      </TableView>
    </Container>
  );
}
