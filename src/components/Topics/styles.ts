import styled from "styled-components/native";

export const Container = styled.View`
  width: 95%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: flex-end;
  width: 95%;
  margin: 10px 0;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
`;

export const Group = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const Message = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #123;
  opacity: 0.1;
`;

export const Closable = styled.TouchableOpacity`
  flex: 1;
  justify-content: flex-end;
  background-color: #00000090;
`;

export const Preview = styled.View`
  background-color: #141a24;
  padding: 30px 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  min-height: 200px;
`;

export const PreviewClose = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const PreviewTitle = styled.Text`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const PreviewDescription = styled.Text`
  font-size: 14px;
  margin-bottom: 10px;
`;
