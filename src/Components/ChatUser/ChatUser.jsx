import { useContext } from "react";
import { ContextIdUser } from "../../Context/ContextIdUser/ContextIdUser";
import { ContextLoadingChat } from '../../Context/ContextLoadingChat/ContextLoadingChat';
import "./CharUser.css";

function ChatUser({ img, name, messages, date, id }) {

  const { setIdUser, idUser } = useContext(ContextIdUser);
  const { loading, setLoading } = useContext(ContextLoadingChat);

  const handleSelectId = () => {
    setIdUser(id);
    setLoading(false);

  }



  return (
    <button className="container-chat-user" onClick={handleSelectId}>

      <img src={img} alt={name} className="container-chat-user__img" />

      <div>

        <div className="container-chat-user__info">
          <p>{name}</p>
          <span>{date}</span>
        </div>
        {
          loading && id === idUser ? <p className="container-chat-user__loading"> Escribiendo...</p> : <p className="container-chat-user__p">  {messages.length !== 0 ? messages.at(-1).message : null} </p>
        }

      </div>
    </button>
  );
};

export default ChatUser;