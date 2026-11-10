import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import Navbar from "../componentes/navbar";

function Configuracoes() {
  const { user, setUser } = useContext(UserContext);

  const [nome, setNome] = useState(user.nome);
  const [bio, setBio] = useState(user.bio);

  function alterarFoto(e) {
    const arquivo = e.target.files[0];

    if (!arquivo) return;

    if (!arquivo.type.startsWith("image/")) {
      alert("Selecione um arquivo de imagem!");
      return;
    }

    const leitor = new FileReader();

    leitor.onload = () => {
      setUser({
        ...user,
        foto: leitor.result,
      });
    };

    leitor.readAsDataURL(arquivo);
  }
  function salvar() {
    setUser({
      ...user,
      nome: nome,
      bio: bio,
    });

    alert("Perfil atualizado!");
  }

  return (
    <div>
      <Navbar />

      <h1>Configurações</h1>
      <div>
        <label>Foto de perfil:</label>

        {user.foto && <img src={user.foto} alt="Foto de perfil" width="120" />}

        <input type="file" accept="image/*" onChange={alterarFoto} />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          salvar();
        }}
      >
        <label>Nome:</label>

        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label>Biografia:</label>

        <textarea value={bio} onChange={(e) => setBio(e.target.value)} />

        <button type="submit">Salvar alterações</button>
      </form>
    </div>
  );
}

export default Configuracoes;
