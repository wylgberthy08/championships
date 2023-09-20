import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.background_secondary};
  padding: 20px;
`;

export const Title = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 24px;
`;

export const AreaInput = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 19px;
  margin-bottom: 50px;
`;

export const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 18px;
`;
export const SocialLoginText = styled.Text`
  color: ${theme.colors.title};
  background-color: #fff;
  padding: 10px;
`;
export const Bar = styled.View`
  width: 140px;
  height: 1px;
  z-index: 0;
  background-color: ${theme.colors.shape_dark};
`;

export const LinkView = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  margin-top: 35px;
`;

interface PropsLink {
  color: string;
}
export const Link = styled.Text<PropsLink>`
  color: ${({ color }) => color};
`;
