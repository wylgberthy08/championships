import React from "react";

import { Container, Input, Label } from "./styles";
import { TextInputProps } from "react-native";

interface Props extends TextInputProps {
  label: string;
}

export function CustomInput({label, ...rest}:Props) {
  return (
    <Container>
      <Label>{label}</Label>
      <Input {...rest} />
    </Container>
  );
}
