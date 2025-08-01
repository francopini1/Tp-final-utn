import { createContext } from "react";

export const ContextLoadingChat = createContext({
  loading: false,
  setLoading: (state) => { },
});
