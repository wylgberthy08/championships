import React, { useContext } from "react";
import { FontAwesome } from "@expo/vector-icons";
import {
  Container,
  Greetings,
  GreetingsView,
  LogoutButton,
  LogoutText,
  Name,
} from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { AuthContext } from "../../contexts/authContexts";
import theme from "../../global/styles/theme";
import firestore from "@react-native-firebase/firestore";

export function Header() {
  const { signOut, user } = useContext(AuthContext);

  return (
    <Container>
      <GreetingsView>
        <Name>Hello {user.name}!</Name>
        <Greetings>
          Welcome to the team{" "}
          <FontAwesome name="soccer-ball-o" size={24} color="black" />
        </Greetings>
      </GreetingsView>
      <LogoutButton onPress={signOut}>
        <MaterialIcons
          name="logout"
          size={24}
          color={theme.colors.shape_dark}
        />
        <LogoutText>Logout</LogoutText>
      </LogoutButton>
    </Container>
  );
}
