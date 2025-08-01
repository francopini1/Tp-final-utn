import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { ContextUsers } from "../../Context/ContextDataUser/ContextDataUser";
import { ContextIdUser } from "../../Context/ContextIdUser/ContextIdUser";
import { ContextLoadingChat } from "../../Context/ContextLoadingChat/ContextLoadingChat";
import { UseMessage } from "../../Hooks/UseMessage/UseMessage";
import { filterUser } from "../../services/filterUser/filterUser";
import "./Chat.css";

function Chat() {
  const refMessage = useRef(null);
  const { idUser, setIdUser } = useContext(ContextIdUser);
  const { users, setUsers } = useContext(ContextUsers);
  const { setLoading } = useContext(ContextLoadingChat);
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const { captureMessage, responseMessage } = UseMessage();

  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchText, setSearchText] = useState("");
  const searchTimeoutRef = useRef(null); 

  useEffect(() => {
    const user = filterUser(users, idUser);
    if (user) {
      setUser(user);
      captureMessage(user);
    }
  }, [idUser]);

  const onNavigate = (id) => {
    navigate("/profile/" + id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (refMessage.current) {
      const message = refMessage.current.value;

      const nuevoMensaje = { id: 9999, message };

      setUser((prevUser) => ({
        ...prevUser,
        messages: [...prevUser.messages, nuevoMensaje],
      }));

      setUsers((prevUsers) => {
        const updatedUsers = prevUsers.map((u) =>
          u.id === idUser
            ? { ...u, messages: [...u.messages, nuevoMensaje] }
            : u
        );

        localStorage.setItem("users", JSON.stringify(updatedUsers));
        return updatedUsers;
      });

      setLoading(true);

      setTimeout(() => {
        const respuesta = {
          idUser,
          message:
            responseMessage[message] ||
            "Lo siento, no tengo respuesta  para eso 🤷‍♂️",
        };

        setUser((prevUser) => ({
          ...prevUser,
          messages: [...prevUser.messages, respuesta],
        }));

        setUsers((prevUsers) => {
          const updatedUsers = prevUsers.map((u) =>
            u.id === idUser
              ? {
                  ...u,
                  messages: [...u.messages, respuesta],
                  date: new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  }),
                }
              : u
          );

          localStorage.setItem("users", JSON.stringify(updatedUsers));
          return updatedUsers;
        });

        setLoading(false);
      }, 4000);

      refMessage.current.value = "";
    }
  };

  const handleClose = () => {
    setIdUser(null);
  };

  const filteredMessages =
    user && showSearchBar && searchText
      ? user.messages.filter((message) =>
          message.message.toLowerCase().includes(searchText.toLowerCase())
        )
      : user?.messages || [];

  useEffect(() => {
    if (showSearchBar) {
      searchTimeoutRef.current = setTimeout(() => {
        setShowSearchBar(false);
        setSearchText("");
      }, 30000);
    }
    return () => clearTimeout(searchTimeoutRef.current);
  }, [showSearchBar]);

  return (
    <article className="chat-user">
      <header className="chat-user__header">
        <button className="chat-user__arrow-left" onClick={handleClose}>
          <img src="/public/icons/arrow-left.svg" alt="arrow" />
        </button>

        <button
          className="chat-user__info"
          onClick={() => onNavigate(user?.id)}>
          <img className="chat-user__img" src={user?.img} alt={user?.name} />
          <h2>{user?.name}</h2>
        </button>

        <ul className="chat-user__icons">
          <li>
            <img src="/icons/camare.svg" alt="camare" />
          </li>
          <li>
            <button
              className="chat-user__search-icon"
              onClick={() => setShowSearchBar(!showSearchBar)}
              aria-label="Buscar en el chat"
              style={{ background: "none", border: "none", padding: 0 }}>
              <img src="/icons/search.svg" alt="search" />
            </button>
          </li>
          <li>
            <img src="/icons/more.svg" alt="more" />
          </li>
        </ul>
      </header>

      {showSearchBar && (
        <div className="chat-user__search-bar">
          <input
            type="text"
            placeholder="Buscar mensajes"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="chat-user__search-input"
            autoFocus
          />
        </div>
      )}

      <section className="chat-user__messages">
        {user
          ? (showSearchBar && searchText
              ? filteredMessages
              : user.messages
            ).map((message) => (
              <div
                className={
                  user.id === message.idUser ? "text-left" : "text-right"
                }>
                <p
                  key={message.idUser}
                  className={
                    user.id === message.idUser
                      ? "chat-user__recipient"
                      : "chat-user__sender"
                  }>
                  {message.message}
                  <img
                    src="/icons/tilde.svg"
                    alt="tilde"
                    className={
                      user.id === message.idUser
                        ? "chat-user__tilde-hidden"
                        : " chat-user__tilde"
                    }
                  />
                </p>
              </div>
            ))
          : null}
      </section>

      <footer className="chat-user__footer">
        <form className="chat-user__form" onSubmit={handleSubmit}>
          <img src="/icons/plus.svg" alt="plus" />
          <input
            ref={refMessage}
            type="text"
            placeholder="Escribe un mensaje"
            className="chat"
          />
          <button>
            <img src="/icons/arrow.svg" alt="arrow" />
          </button>
        </form>
      </footer>
    </article>
  );
}

export default Chat;
