import { useState } from "react";
import { ContextLoadingChat } from "./ContextLoadingChat";
function ProviderLoadingChat({ children }) {

  const [loading, setLoading] = useState(false);

  return (
    <ContextLoadingChat.Provider value={{ loading, setLoading }}>
      {children}
    </ContextLoadingChat.Provider>
  )
}

export default ProviderLoadingChat;