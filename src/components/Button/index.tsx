import React from "react";

import { ButtonView, Title } from "./styles";
import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import { Image } from "expo-image";
import theme from "../../global/styles/theme";

interface Props extends TouchableOpacityProps {
  type: "outlined" | "contained";
  title: string;
  icon?: string;
  isLoading?: boolean;
}
export function Button({ type, title, icon, isLoading, ...rest }: Props) {
  return (
    <ButtonView type={type} {...rest}>
      <Image
        source={icon}
        style={{ width: icon ? 26 : 0, height: icon ? 26 : 0 }}
      />
      {isLoading && (
        <ActivityIndicator size={20} color={theme.colors.background_secondary} />
      )}
      {!isLoading && <Title type={type}>{title}</Title>}
    </ButtonView>
  );
}
