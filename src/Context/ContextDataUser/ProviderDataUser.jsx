import { useState } from "react";
import { data } from '../../Data/data';
import { ContextUsers } from "./ContextDataUser";

function ProviderUsers({ children }) {

  const [users, setUsers] = useState(data);

  return (
    <ContextUsers.Provider value={{ users, setUsers }}>
      {children}
    </ContextUsers.Provider>
  )

}


export default ProviderUsers;