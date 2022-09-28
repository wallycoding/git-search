import styled from "styled-components/native";

type TextProps = {
  txtColor: string
}

export const Container = styled.View`
  background-color: #141A24;
  min-height: 90px;
  width: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
`;

export const Head = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
`;

export const Text = styled.Text<TextProps>`
  color: ${props => props.txtColor};
  font-size: 18px;
  font-weight: bold;
`;

export const InputBox = styled.TouchableHighlight`
  background-color: #0A0C10;
  width: 90%;
  padding: 10px;
  border-radius: 7px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

export const Input = styled.TextInput`
  margin-left: 5px;
`;