import { useState } from "react";
import { ContextIdUser } from "./ContextIdUser";
function ProviderIdUser({ children }) {

  const [idUser, setIdUser] = useState(null);

  return (
    <ContextIdUser.Provider value={{ idUser, setIdUser }}>
      {children}
    </ContextIdUser.Provider>
  )

}


export default ProviderIdUser;