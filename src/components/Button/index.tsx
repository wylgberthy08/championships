import React from "react";

import { ButtonView, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";
import { Image } from "expo-image";

interface Props extends TouchableOpacityProps {
  type: "outlined" | "contained";
  title: string;
  icon?: string;
}
export function Button({ type, title, icon, ...rest }: Props) {
  return (
      <ButtonView type={type} {...rest}>
        <Image
          source={icon}
          style={{ width: icon ? 26 : 0, height: icon ? 26 : 0 }}
        />
        <Title type={type}>{title}</Title>
      </ButtonView>
  );
}
