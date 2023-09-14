import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Container, Greetings } from "./styles";

export function Header() {
  return (
    <Container>
      <Greetings>Welcome to the team</Greetings>
      <FontAwesome name="soccer-ball-o" size={24} color="black" />
    </Container>
  );
}
