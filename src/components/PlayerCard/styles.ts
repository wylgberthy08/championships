import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.View`
  width: 200px;
  background-color: ${theme.colors.title};
  padding: 10px;
  border-radius: 10px;
  margin-right: 8px;
`;

export const InfoView = styled.View``;

export const PlayerName = styled.Text`
  color: ${theme.colors.background_primary};
  font-size: 16px;
  font-weight: 900;
`;

export const TotalGoals = styled.Text`
  color: ${theme.colors.background_primary};
  font-size: 16px;
  font-weight: 900;
`;

export const ViewTeam = styled.View``;

export const TeamName = styled.Text`
  color: ${theme.colors.background_primary};
  font-size: 16px;
  font-weight: 900;
`;
