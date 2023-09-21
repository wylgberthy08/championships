import React from "react";

import { Container, Error, Input, Label } from "./styles";
import { TextInputProps } from "react-native";

interface Props extends TextInputProps {
  label: string;
  error: string;
}

export function CustomInput({ label, error, ...rest }: Props) {
  return (
    <Container>
      <Label>{label}</Label>
      <Input {...rest} />
      <Error>{error}</Error>
    </Container>
  );
}
