import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Container,
  Group,
  Header,
  Message,
  PreviewTitle,
  Preview,
  Title,
  PreviewDescription,
  Closable,
  PreviewClose,
} from "./styles";
import { useTopics } from "../../providers/TopicProvider";
import { FlatList, Modal, Text } from "react-native";
import Topic from "./components/Topic";
import TopicEntity from "../../entities/TopicEntity";

const Topics = () => {
  const [topics, setTopics] = useTopics();
  const [topic, setTopic] = useState<TopicEntity | null>(null);
  const onOpen = (topic: TopicEntity) => setTopic(topic);

  return (
    <Container>
      <Header>
        <MaterialIcons
          name="playlist-play"
          size={30}
          style={{
            marginHorizontal: 10,
          }}
        />
        <Title>Topics</Title>
      </Header>
      <FlatList
        keyboardShouldPersistTaps="handled"
        style={{
          width: "100%",
        }}
        contentContainerStyle={{
          paddingTop: 10,
          paddingBottom: 200,
        }}
        data={topics}
        renderItem={({ item }) => <Topic {...item} onOpen={onOpen} />}
        keyExtractor={(_, index) => index.toString()}
      />
      {!topics.length && (
        <Group>
          <MaterialIcons
            name="find-in-page"
            size={30}
            style={{
              marginHorizontal: 10,
              color: "#123",
              opacity: 0.1,
            }}
          />
          <Message>No have data.</Message>
        </Group>
      )}
      <Modal visible={!!topic} animationType="none" transparent={true}>
        <Closable onPress={() => setTopic(null)}>
          <Preview>
            <PreviewClose>
              <MaterialIcons
                name="close"
                size={30}
                style={{
                  color: "#123",
                  opacity: 0.1,
                }}
              />
            </PreviewClose>
            <PreviewTitle>{topic?.display_name ?? topic?.name}</PreviewTitle>
            <PreviewDescription>
              {topic?.description ?? topic?.short_description}
            </PreviewDescription>
          </Preview>
        </Closable>
      </Modal>
    </Container>
  );
};

export default Topics;
