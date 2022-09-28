import TopicEntity from "./TopicEntity";

interface TopicResponseEntity {
  total_count: number;
  incomplete_results: boolean;
  items: Array<TopicEntity>
}

export default TopicResponseEntity;