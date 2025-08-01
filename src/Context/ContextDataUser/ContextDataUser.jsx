import { createContext } from "react";


export const ContextUsers = createContext({
  users: [],
  setUsers: (users) => { },
});
