import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #141A24;
  align-items: center;
  flex-direction: row;
  margin: 10px;
  padding: 20px 10px;
  border-radius: 5px;
  max-height: 80px;
  position: relative;
`;

export const OpenModal = styled.TouchableOpacity`
  background-color: #141A24;
  position: absolute;
  top: -15px;
  right: 10px;
  align-items: center;
  padding: 5px 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Group = styled.View`
  overflow: hidden;
  flex: 1;
  margin-left: 10px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const ShortDescription = styled.Text`
  font-size: 15px;
`;