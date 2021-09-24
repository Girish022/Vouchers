import { createContext } from "react";

export const defaultContextValue = {
  search: "",

  setSearch: () => null,
};

export const AppContext = createContext(defaultContextValue);
