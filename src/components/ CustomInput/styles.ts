import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.View`
  width: 100%;
  height: 90px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 48px;
  border: 1px solid ${theme.colors.text_detail};
  border-radius: 10px;
  padding: 8px;
`;

export const Label = styled.Text`
  font-size: 14px;
  color: ${theme.colors.text_detail};
  margin-bottom: 2px;
  margin-top: 20px;
`;

export const Error = styled.Text`
color: ${theme.colors.error};
margin-bottom: 10px;
`;
