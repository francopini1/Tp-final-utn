import { useContext, useEffect } from "react";
import AsideUsers from "../../Components/AsideUsers/AsideUsers";
import ContainerChat from "../../Components/ContainerChat/ContainerChat";
import { ContextIdUser } from "../../Context/ContextIdUser/ContextIdUser";

import { ContextUsers } from "../../Context/ContextDataUser/ContextDataUser";
import "./Home.css";

function Home() {

  const { idUser } = useContext(ContextIdUser);
  const { setUsers } = useContext(ContextUsers);



  useEffect(() => {
    const data = localStorage.getItem("users");
    if (data) {
      const newUsers = JSON.parse(data);
      setUsers(newUsers);
    }
  }, []);

  return (
    <main className="container-main">
      <AsideUsers />
      <ContainerChat id={idUser} />
    </main>
  );
}

export default Home;