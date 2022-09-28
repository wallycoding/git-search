interface TopicEntity {
  name: string;
  display_name: string;
  short_description: string;
  description: string;
  created_by: string;
  released: string;
  created_at: string;
  updated_at: string;
  featured: boolean;
  curated: boolean;
  score: number;
}

export default TopicEntity;
