import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 100px;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  background-color: ${theme.colors.shape_dark};
  border: 1px solid ${theme.colors.shape_dark};
`;

export const CompetitionName = styled.Text`
  font-size: 24px;
  font-weight: 900;
  color: ${theme.colors.background_primary};
`;

export const TableView = styled.View`
  width: 100%;
  padding: 8px;
`;

export const HeaderTable = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 900;
  color: ${theme.colors.title};
`;

export const HeaderInfoView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: ${theme.colors.shape};
  padding-left: 8px;
  padding-right: 8px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;
export const HeaderInfo = styled.Text`
  font-size: 14px;
  color: ${theme.colors.text_detail};
`;

export const BackButton = styled.TouchableOpacity`
  margin-right: 10px;
  align-items: center;
  justify-content: center;
`;