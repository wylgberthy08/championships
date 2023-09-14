import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.View`
  width: 282px;
  height: 150px;
  flex-direction: row;
  background-color: ${theme.colors.shape_dark};
  margin-left: 10px;
  margin-top: 10px;
  justify-content: center;
  border-radius: 5px;
  align-items: center;
`;

export const TeamView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TeamName = styled.Text`
  font-size: 16px;
  font-style: normal;
  color: ${theme.colors.background_secondary};
  font-weight: 700;
`;

export const Separator = styled.View`
  width: 67px;
  height: 32px;
  background-color: ${theme.colors.shape};
  align-items: center;
  justify-content: center;
`;
export const ResultText = styled.Text`
  color: ${theme.colors.title};
  font-weight: 900;
  font-size: 20px;
`;
