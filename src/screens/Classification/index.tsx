import React, { useEffect, useState } from "react";

import {
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
import { useRoute } from "@react-navigation/native";
import { TableItem, getStandings } from "../../services/get-standings.service";
import { PositionCard } from "../../components/PositionCard";

export function Classification() {
  const route = useRoute();
  const { id, name }: any = route.params || {};
  const [classification, setClassification] = useState<TableItem[]>();

  async function fetchStandingsData(standingsId: number) {
    const response = await getStandings(standingsId);

    setClassification(response.standings.flatMap((item) => item.table));
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
