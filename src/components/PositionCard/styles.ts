import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.colors.shape_dark};
  padding: 8px;
  border: 1px solid ${theme.colors.main_light};
`;

export const TextInfo = styled.Text`
  color: ${theme.colors.background_primary};
  font-weight: 900;
`;

export const ViewNameAndCrest = styled.View`
align-items: center;
justify-content: center;
`;
