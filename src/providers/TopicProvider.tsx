import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import TopicEntity from "../entities/TopicEntity";
import TopicApi from "../services/topic.api";
import { useSearch } from "./SearchProvider";

const TopicsContext = createContext<
  [TopicEntity[], React.Dispatch<React.SetStateAction<TopicEntity[]>>] | null
>(null);

const TopicsProvider = (props: { children: ReactNode }) => {
  const [search, setSearch] = useSearch();
  const [topics, setTopics] = useState<TopicEntity[]>([]);

  useEffect(() => {
    if (!search.trim()) return setTopics([]);
    const interval = setTimeout(async () => {
      const response = await TopicApi.search(search);
      setSearch((search) => {
        if (response && search.trim()) setTopics(response.items);
        return search;
      });
    }, 500);
    return () => {
      clearTimeout(interval);
    };
  }, [search]);

  return (
    <TopicsContext.Provider value={[topics, setTopics]}>
      {props.children}
    </TopicsContext.Provider>
  );
};

export const useTopics = () => useContext(TopicsContext)!;

export default TopicsProvider;
