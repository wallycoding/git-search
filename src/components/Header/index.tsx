import React, { useRef } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { Container, Head, Text, Input, InputBox } from "./styles";
import { useSearch } from "../../providers/SearchProvider";
import { TextInput } from "react-native";

const Header = () => {
  const inputRef = useRef<TextInput>(null);
  const [search, setSearch] = useSearch();

  const onOpenKeyboard = () => {
    const target = inputRef.current;
    if (target) {
      if (target.isFocused()) target.blur();
      target.focus();
    }
  };

  return (
    <Container>
      <Head>
        <Text txtColor="#FC8A49">Git </Text>
        <Text txtColor="white">Search</Text>
      </Head>
      <InputBox onPress={onOpenKeyboard}>
        <>
          <EvilIcons
            name="search"
            size={24}
            style={{
              marginHorizontal: 10,
            }}
          />
          <Input
            ref={inputRef}
            onChangeText={setSearch}
            value={search}
            placeholder="Search"
          />
        </>
      </InputBox>
    </Container>
  );
};

export default Header;
