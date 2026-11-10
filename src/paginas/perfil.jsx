import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Navbar from "../componentes/navbar";

function Perfil() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <Navbar />
      {user.foto && <img src={user.foto} alt="Foto do usuário" width="150" />}
      <h1>Meu Perfil</h1>

      <h2>{user.nome}</h2>

      <p>{user.bio}</p>
    </div>
  );
}

export default Perfil;
