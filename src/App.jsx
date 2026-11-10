import { Routes, Route } from "react-router-dom";

import Login from "./paginas/login";
import Feed from "./paginas/feed";
import Perfil from "./paginas/perfil";
import Configuracoes from "./paginas/configuracoes";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/configuracoes" element={<Configuracoes />} />
    </Routes>
  );
}
export default App;
