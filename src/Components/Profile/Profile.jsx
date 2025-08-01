import { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { ContextUsers } from "../../Context/ContextDataUser/ContextDataUser";
import { filterUser } from "../../services/filterUser/filterUser";
import "./Profile.css";

function Profile() {

  const params = useParams();
  const navigate = useNavigate();
  const { users } = useContext(ContextUsers);

  const onNavigate = () => {
    navigate('/');
  }
  return (
    <section className="profile">
      {
        params.id ?
          <article className="profile__article">
            <button onClick={onNavigate}>
              <img src="/icons/delete.svg" alt="delete" />
            </button>
            <header className="profile__header">
              <img src={filterUser(users, params.id).img} alt={filterUser(users, params.id).name} className="profile__img" />
              <h3>{filterUser(users, params.id).name}</h3>
              <strong className="profile__tel">{filterUser(users, params.id).tel}</strong>
            </header>

            <div className="profile__info">
              <b>Info.</b>
              <p>{filterUser(users, params.id).info}</p>
            </div>

            <footer>
              <ul className="profile__options">
                <li> <img src="/icons/heart.svg" alt="heart" /> Añadir a favoritos</li>
                <li className="profile__red"> <img src="/icons/ban.svg" alt="ban" /> Bloquear a {filterUser(users, params.id).name} </li>
                <li className="profile__red"> <img src="/icons/hand.svg" alt="hand" /> Bloquear a {filterUser(users, params.id).name} </li>
                <li className="profile__red"> <img src="/icons/trash.svg" alt="trash" /> Eliminar chat</li>
              </ul>
            </footer>
          </article>

          : null
      }

    </section>
  )
}

export default Profile;