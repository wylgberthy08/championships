import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export type TypeButton = {
  type: "outlined" | "contained";
};

export const Title = styled.Text<TypeButton>`
  font-size: 16px;
  font-weight: 800;
  margin: 0 auto;
  color: ${({ type = "outlined" }) =>
    type === "outlined" ? theme.colors.header : "#fff"};
`;

export const ButtonView = styled.TouchableOpacity<TypeButton>`
  width: 100%;
  height: 48px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background-color: ${({ type = "outlined" }) =>
    type === "contained" ? theme.colors.shape_dark : "#fff"};
  border: 1px solid
    ${({ type = "outlined" }) =>
      type === "outlined" ? theme.colors.text_detail : "#fff"};
  border-radius: 8px;
`;
