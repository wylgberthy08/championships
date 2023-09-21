import React, { useContext } from "react";

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
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../../contexts/authContexts";

type FormDataProps = {
  email: string;
  password: string;
};

const signInSchema = yup.object({
  email: yup.string().required("*Informe o e-email.").email("E-mail invalido"),
  password: yup
    .string()
    .required("*Informe a senha.")
    .min(6, "A senha deve ter pelo menos 6 digitos"),
});

export function SignIn() {
  const navigation = useNavigation();
  const { signIn } = useContext(AuthContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signInSchema),
  });

  async function handleSignIn(data: FormDataProps) {
    console.log(data);
    await signIn(data.email, data.password);
  }

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
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <CustomInput
              label="E-mail"
              placeholder="example@gmail.com"
              onChangeText={onChange}
              value={value}
              error={errors.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <CustomInput
              error={errors.password?.message}
              label="Password"
              placeholder="Enter Your Password"
              onChangeText={onChange}
              value={value}
            />
          )}
        />
      </AreaInput>
      <Button
        onPress={handleSubmit(handleSignIn)}
        title="Login"
        type="contained"
      />
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
