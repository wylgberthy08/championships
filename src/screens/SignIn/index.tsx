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

export function SignIn() {
  const navigation = useNavigation();

  function handleNavigateToSignUp() {
    navigation.navigate("SignUp");
  }
  return (
    <Container>
      <Image
        source={require("../../assets/logo.svg")}
        style={{ width: 63, height: 63 }}
      />

      <Title>Hi, Welcome Back! 👋</Title>
      <AreaInput>
        <CustomInput label="E-mail" placeholder="example@gmail.com" />
        <CustomInput label="Password" placeholder="Enter Your Password" />
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
        style={{ marginBottom: 21 }}
      />
      <Button
        icon={require("../../assets/GoogleLogo.svg")}
        title="Login"
        type="outlined"
      />

      <LinkView onPress={handleNavigateToSignUp}>
        <Link color={theme.colors.header}>
          Don’t have an account ? <Link color="#2F89FC">Sign Up</Link>
        </Link>
      </LinkView>
    </Container>
  );
}
