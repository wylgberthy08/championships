import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${theme.colors.background_primary};
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

export const BackButton = styled.TouchableOpacity`
  margin-right: 10px;
  align-items: center;
  justify-content: center;
`;
export const SectionMatches = styled.View`
  width: 100%;
  height: 200px;
  padding: 10px;
`;

export const CompetitionName = styled.Text`
  font-size: 24px;
  font-weight: 900;
  color: ${theme.colors.background_primary};
`;

export const TableView = styled.View`
  width: 100%;
  padding: 20px;
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
  padding: 8px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;
export const HeaderInfo = styled.Text`
  font-size: 14px;
  color: ${theme.colors.text_detail};
`;

export const FooterTable = styled.View`
  width: 100%;
  align-items: flex-end;
  background-color: ${theme.colors.background_secondary};
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 5px;
`;

export const ButtonFooter = styled.TouchableOpacity``;

export const ScoresView = styled.View`
  width: 100%;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 24px;
`;
