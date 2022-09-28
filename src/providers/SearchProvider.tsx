import { createContext, ReactNode, useContext, useState } from "react";

const SearchContext = createContext<
  [string, React.Dispatch<React.SetStateAction<string>>] | null
>(null);

const SearchProvider = (props: { children: ReactNode }) => {
  const state = useState<string>("");
  return (
    <SearchContext.Provider value={state}>
      {props.children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext)!;

export default SearchProvider;
