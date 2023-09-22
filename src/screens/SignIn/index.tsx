import React, { useContext } from "react";

import { AreaInput, Container, Link, LinkView, Title } from "./styles";
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
  email: yup.string().required("*E-mail is required.").email("Invalid email"),
  password: yup
    .string()
    .required("*Password is required.")
    .min(6, "The password must have at least 6 digits."),
});

export function SignIn() {
  const navigation = useNavigation();
  const { signIn, loadingAuth } = useContext(AuthContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signInSchema),
  });

  async function handleSignIn(data: FormDataProps) {
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
        isLoading={loadingAuth}
        onPress={handleSubmit(handleSignIn)}
        title="Login"
        type="contained"
      />

      <LinkView onPress={handleNavigateToSignUp}>
        <Link color={theme.colors.header}>
          Don’t have an account ? <Link color="#2F89FC">Sign Up</Link>
        </Link>
      </LinkView>
    </Container>
  );
}
