import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.TouchableOpacity`
  width: 100%;
  background-color: ${theme.colors.shape_dark};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  padding: 10px;
  border-radius: 10px;
`;

export const CompetitionName = styled.Text`
color: ${theme.colors.background_primary};
font-weight: 900;
font-size: 16px;
`;
