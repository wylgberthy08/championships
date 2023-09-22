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
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { TableItem, getStandings } from "../../services/get-standings.service";
import { PositionCard } from "../../components/PositionCard";

import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "react-query";

export function Classification() {
  const route = useRoute();
  const navigation = useNavigation();
  const { id, name }: any = route.params || {};

  const { data, isLoading } = useQuery(["classification", id], () =>
    getStandings(id)
  );

  const classification = data?.standings.flatMap((item) => item.table);

  function handleGoBack() {
    navigation.goBack();
  }

  if (isLoading) {
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
          keyExtractor={(item) => String(item.team.id)}
          renderItem={({ item }) => <PositionCard data={item} />}
        />
      </TableView>
    </Container>
  );
}
