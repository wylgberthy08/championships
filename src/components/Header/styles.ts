import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 20px;
  justify-content: space-between;
`;

export const GreetingsView = styled.View``;
export const Greetings = styled.Text`
  font-size: 16px;
  color: ${theme.colors.title};
  font-weight: 900;
  margin-right: 8px;
`;

export const Name = styled.Text`
  font-size: 26px;
  color: ${theme.colors.shape_dark};
  font-weight: 900;
  margin-right: 8px;
`;

export const LogoutButton = styled.TouchableOpacity``;

export const LogoutText = styled.Text``;
