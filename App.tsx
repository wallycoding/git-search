import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import Header from "./src/components/Header";
import Topics from "./src/components/Topics";
import SearchProvider from "./src/providers/SearchProvider";
import TopicsProvider from "./src/providers/TopicProvider";
import { Wrapper } from "./styles";

export default function App() {
  useEffect(() => {}, []);

  return (
    <Wrapper>
      <SearchProvider>
        <TopicsProvider>
          <Header />
          <Topics />
        </TopicsProvider>
      </SearchProvider>
      <StatusBar style="auto" translucent={false} />
    </Wrapper>
  );
}