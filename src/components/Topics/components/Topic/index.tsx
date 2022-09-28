import React from "react";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { Container, Group, Title, ShortDescription, OpenModal } from "./styles";
import TopicEntity from "../../../../entities/TopicEntity";

interface TopicProps extends TopicEntity {
  onOpen(topic: TopicEntity): void;
}

const Topic = ({ onOpen, ...props }: TopicProps) => {
  return (
    <Container>
      <>
        <OpenModal onPress={() => onOpen(props)}>
          <Entypo name="chevron-small-up" size={24} />
        </OpenModal>
        <MaterialIcons
          name="topic"
          size={34}
          style={{
            marginHorizontal: 10,
          }}
        />
        <Group>
          <Title>{props.name}</Title>
          <ShortDescription numberOfLines={2}>
            {props.short_description}
          </ShortDescription>
        </Group>
      </>
    </Container>
  );
};

export default Topic;
