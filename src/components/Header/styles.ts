import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 20px;
`;
export const Greetings = styled.Text`
  font-size: 26px;
  color: ${theme.colors.title};
  font-weight: 900;
  margin-right: 8px;
`;
