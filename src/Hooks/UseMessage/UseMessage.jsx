import { useState } from "react";

export function UseMessage() {

  const [responseMessage, setResponseMessage] = useState('');

  const captureMessage = (users) => {
    setResponseMessage(users.automessage)
  }


  return {
    responseMessage,
    captureMessage
  }
}

