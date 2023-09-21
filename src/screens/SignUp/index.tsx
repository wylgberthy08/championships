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
  name: string;
  email: string;
  password: string;
  confirm_password: string;
};

const signUpSchema = yup.object({
  name: yup.string().required("*Informe o nome."),
  email: yup.string().required("*Informe o e-email.").email("E-mail invalido"),
  password: yup
    .string()
    .required("*Informe a senha.")
    .min(6, "A senha deve ter pelo menos 6 digitos"),
  confirm_password: yup
    .string()
    .required("*Confirme a senha.")
    .oneOf([yup.ref("password"), null], "A confirmação da senha não confere."),
});

export function SignUp() {
  const navigation = useNavigation();
  const { signUp } = useContext(AuthContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  });

  function handleNavigateToSignIn() {
    navigation.navigate("SignIn");
  }

  async function handleSignUp(data: FormDataProps) {
    console.log(data);
    await signUp(data.email, data.password, data.name);
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
        onPress={handleSubmit(handleSignUp)}
        title="SignUp"
        type="contained"
      />
      <Wrapper>
        <Bar />
        <SocialLoginText>Or With</SocialLoginText>
        <Bar />
      </Wrapper>
  

      <LinkView onPress={handleNavigateToSignIn}>
        <Link color={theme.colors.header}>
          Already have an account?
          <Link color="#2F89FC">Login</Link>
        </Link>
      </LinkView>
    </Container>
  );
}
