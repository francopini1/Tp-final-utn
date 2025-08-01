import "./ListOptions.css";
function ListOptions() {
  return (
    <ul className="container-list-options">
      <li className="container-list-options--active">Todos</li>
      <li>No Leidos</li>
      <li>Favoritos</li>
      <li>Grupos</li>
    </ul>
  )
}


export default ListOptions;