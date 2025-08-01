import { useContext, useState } from "react";
import { ContextUsers } from "../../Context/ContextDataUser/ContextDataUser";
import ChatUser from "../ChatUser/ChatUser";
import ListOptions from "../ListOptions/ListOptions";
import "./AsideUsers.css";

function AsideUsers() {
  const { users } = useContext(ContextUsers);
  const [search, setSearch] = useState("");

  // Filtra los usuarios por nombre
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <aside className="container-aside">
      <section className="container-settings">
        <ul className="container-settings__icons">
          <li>
            <img src="/icons/message.svg" alt="message" />
          </li>
          <li>
            <img src="/icons/state.svg" alt="state" />
          </li>
          <li>
            <img src="/icons/channel.svg" alt="channel" />
          </li>
          <li>
            <img src="/icons/people.svg" alt="people" />
          </li>
        </ul>
        <ul className="container-settings__profile">
          <li>
            <img src="/icons/setting.svg" alt="setting" />
          </li>
          <li className="franco">
            <img src="/me.jpg" alt="franco" className="franco-img" />
          </li>
        </ul>
      </section>

      <section className="container-aside__users">
        <header className="container-aside__header">
          <h2>WhatsApp</h2>
          <form
            className="container-aside__form"
            onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Buscar un chat o iniciar uno nuevo"
              className="input-search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <img src="/icons/search.svg" alt="search" className="search" />
          </form>
          <ListOptions />
        </header>

        <article className="container-aside__article">
          {filteredUsers.map((user) => (
            <ChatUser key={user.id} {...user} />
          ))}
        </article>
      </section>
    </aside>
  );
}

export default AsideUsers;
