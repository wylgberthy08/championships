import React, { useEffect, useState } from "react";

import { Container } from "./styles";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { Competition, CompetitionItem } from "../../components/Competition";
import { Header } from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import { getCompetitions } from "../../services/get-competitions.service";

export function Home() {
  const navigation = useNavigation();
  const [competitions, setCompetitions] = useState<CompetitionItem[]>();
  async function fetchDatatCompetitions() {
    const response = await getCompetitions();
    setCompetitions(response);
  }

  function handleNavigate(id: number, name: string) {
    navigation.navigate("CompetitionDetails", { id: id, name: name });
  }

  useEffect(() => {
    fetchDatatCompetitions();
  }, []);

  if (!competitions) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator color="#000" size={40} />
      </View>
    );
  }
  return (
    <Container>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        {competitions?.map((country) => (
          <Competition
            onPress={() => handleNavigate(country.id, country.name)}
            key={country.id}
            name={country.name}
            emblem={country.emblem}
          />
        ))}
      </ScrollView>
    </Container>
  );
}
