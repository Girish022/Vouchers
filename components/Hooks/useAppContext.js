import { useState, useMemo } from "react";

export function useAppContext() {
  const [search, setSearch] = useState("");
  const [cash, setCash]=useState(0)


  return useMemo(
    () => ({
      search,
      setSearch,
      cash,
      setCash
    }),
    [search, cash]
  );
}
