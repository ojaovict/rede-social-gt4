import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <h2>Instagram</h2>

      <div>
        <Link to="/feed">Feed</Link>
        <Link to="/perfil">Perfil</Link>
        <Link to="/configuracoes">Configurações</Link>
      </div>
    </nav>
  )
}

export default Navbar