import React from "react";

import {
  AreaInput,
  Bar,
  Container,
  Link,
  LinkView,
  SocialLoginText,
  Title,
  Wrapper,
} from "./styles";
import { Image } from "expo-image";
import { CustomInput } from "../../components/ CustomInput";
import { Button } from "../../components/Button";
import theme from "../../global/styles/theme";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";

export function SignUp() {
  const navigation = useNavigation();

  function handleNavigateToSignIn() {
    navigation.navigate("SignIn");
  }
  return (
      <Container>
        <Image
          source={require("../../assets/logo.svg")}
          style={{ width: 63, height: 63, marginTop: 8 }}
        />

        <Title>Create an account</Title>
        <AreaInput>
          <CustomInput label="Username" placeholder="Enter Your Username" />
          <CustomInput label="E-mail" placeholder="example@gmail.com" />
          <CustomInput label="Password" placeholder="Enter Your Password" />
          <CustomInput
            label="Confirm password"
            placeholder="Confirm password"
          />
        </AreaInput>
        <Button title="Login" type="contained" />
        <Wrapper>
          <Bar />
          <SocialLoginText>Or With</SocialLoginText>
          <Bar />
        </Wrapper>
        <Button
          icon={require("../../assets/FacebookLogo.svg")}
          title="Login with Facebook"
          type="contained"
          style={{ marginBottom: 16 }}
        />
        <Button
          icon={require("../../assets/GoogleLogo.svg")}
          title="Login"
          type="outlined"
        />

        <LinkView onPress={handleNavigateToSignIn}>
          <Link color={theme.colors.header}>
            Already have an account?
            <Link color="#2F89FC">Login</Link>
          </Link>
        </LinkView>
      </Container>
  );
}
