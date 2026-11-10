import { useState } from 'react'
import { UserContext } from './UserContext'

export function UserProvider({ children }) {

  const [user, setUser] = useState({
    nome: 'João',
    foto: '',
    bio: 'Desenvolvedor em formação'
  })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}