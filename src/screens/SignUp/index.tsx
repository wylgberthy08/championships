import React, { useContext, useState } from "react";

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
  name: string;
  email: string;
  password: string;
  confirm_password: string;
};

const signUpSchema = yup.object({
  name: yup.string().required("*Name is required."),
  email: yup.string().required("**E-mail is required.").email("Invalid email"),
  password: yup
    .string()
    .required("*Password is required.")
    .min(6, "The password must have at least 6 digits."),
  confirm_password: yup
    .string()
    .required("*Confirme password.")
    .oneOf(
      [yup.ref("password"), null],
      "Password confirmation does not match."
    ),
});

export function SignUp() {
  const navigation = useNavigation();
  const { signUp, loadingAuth } = useContext(AuthContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  });

  const [loading, setLoading] = useState(loadingAuth);

  function handleNavigateToSignIn() {
    navigation.navigate("SignIn");
  }

  async function handleSignUp(data: FormDataProps) {
    setLoading(true);
    await signUp(data.email, data.password, data.name);
    setLoading(false);
  }

  return (
    <Container>
      <Image
        source={require("../../assets/logo.svg")}
        style={{ width: 63, height: 63, marginTop: 8 }}
      />

      <Title>Create an account</Title>
      <AreaInput>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <>
              <CustomInput
                label="name"
                placeholder="Enter Your name"
                onChangeText={onChange}
                value={value}
                error={errors.name?.message}
              />
            </>
          )}
        />
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
        <Controller
          control={control}
          name="confirm_password"
          render={({ field: { onChange, value } }) => (
            <CustomInput
              label="Confirm password"
              placeholder="Confirm password"
              onChangeText={onChange}
              error={errors.confirm_password?.message}
              value={value}
            />
          )}
        />
      </AreaInput>
      <Button
        isLoading={loading}
        onPress={handleSubmit(handleSignUp)}
        title="SignUp"
        type="contained"
      />

      <LinkView onPress={handleNavigateToSignIn}>
        <Link color={theme.colors.header}>
          Already have an account?
          <Link color="#2F89FC"> Login</Link>
        </Link>
      </LinkView>
    </Container>
  );
}
